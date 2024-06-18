<template>
  <div class="container mt-5">
    <ConsulteGrid
      :name="'testGrid'"
      :columns="columns"
      :data-source="dataSource"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ConsulteGrid,
  ConsulteGridColumnsModel,
  DataSource,
} from "consulte-framework-vue/components/grid";

interface RowData {
  isActive: boolean;
  name: string;
  company: string;
  age: number;
  registered: string;
}

class CustomDataSource extends DataSource<RowData> {
  async load() {
    return new Promise<RowData[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            isActive: true,
            name: "John Doe",
            company: "Company A",
            age: 30,
            registered: "2020-03-15",
          },
          {
            isActive: false,
            name: "Jane Smith",
            company: "Company B",
            age: 25,
            registered: "2019-05-20",
          },
          {
            isActive: true,
            name: "Peter Johnson",
            company: "Company C",
            age: 40,
            registered: "2021-12-10",
          },
        ]);
      }, 1000);
    });
  }
}

export default defineComponent({
  name: "GridPage",
  components: {
    ConsulteGrid,
  },
  data() {
    return {
      columns: [
        { text: "Active", align: "center", datafield: "isActive" },
        { text: "Name", align: "center", datafield: "name" },
        { text: "Company", align: "center", datafield: "company" },
        { text: "Age", align: "center", datafield: "age" },
        {
          text: "Registered",
          align: "center",
          datafield: "registered",
          columntype: "date",
        },
      ] as ConsulteGridColumnsModel[],
      dataSource: new CustomDataSource(0, 10, 0, 0, []),
    };
  },
  mounted() {
    this.dataSource.load().then((rows) => {
      this.dataSource.rows = rows;
      this.dataSource.calculateNumberOfPages();
    });
  },
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>

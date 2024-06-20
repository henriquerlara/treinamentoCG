<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="https://static.wixstatic.com/media/4a7a09_bea5362cbce64fee9b7cf4645c1b88dd~mv2.png/v1/fit/w_2500,h_1330,al_c/4a7a09_bea5362cbce64fee9b7cf4645c1b88dd~mv2.png" alt="Logo">
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <h1>Treinamento</h1>
    </header>
</template>

<script>
    export default {
    name: 'HeaderPage',
    }
</script>

<style scoped>
.header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo img {
    height: 50px;
}

.nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.nav li {
    margin-left: 20px;
}

.nav a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s;
}

.nav a:hover {
    color: #ddd;
}

h1 {
    margin: 20px 0 0;
    font-size: 36px;
    font-weight: 300;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    .nav ul {
        flex-direction: column;
        margin-top: 20px;
    }
    .nav li {
        margin: 10px 0;
    }
    .logo img {
        height: 40px;
    }
}

</style>
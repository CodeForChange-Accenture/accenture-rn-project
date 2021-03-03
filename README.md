<div align="center">
    <img src="src/images/logoreadme.png">
    <h1 align="center">GamaBank</h1>
</div>
<p id="sobre">Projeto desenvolvido para Accenture durante as semanas de estudo com a <a
        href="https://www.gama.academy/">GamaAcademy</a> utilizando React Native e seguindo
    o <a
        href="https://www.figma.com/file/tMkyFwxkBMdlFOf3b2q20P/DesafioGamaAccenture_1_2-mobile?node-id=0%3A1">layout</a>
    disponibilizado no Figma pela equipe do Gama.
<p>

<h1>Tabela de conteúdos</h1>
<ul>
    <li>
        <a href="#sobre">Sobre</a>
    </li>
    <li>
        <a href="#participantes">Participantes</a>
    </li>
    <li>
        <a href="#tecnologias">Tecnologias usadas</a>
    </li>
    <li>
        <a href="#instalacao">Instalação</a>
    </li>
    <li>
        <a href="#estrutura">Estrutura</a>
    </li>
    <li>
        <a href="#features">Features</a>
    </li>
</ul>

<h1 id="participantes">Participantes</h1>
<ul>
    <li>
        <a href="https://github.com/castelvani">Gabriel Steidle Castrezano</a>
    </li>
    <li>
        <a href="https://github.com/matheusCMendes">Matheus Cruz Mendes</a>
    </li>
    <li>
        <a href="https://github.com/bettyap">Elisabeth Aparecida dos Santos Silva</a>
    </li>
    <li>
        <a href="https://github.com/nathanoliveiras">Nathan Oliveira Santos</a>
    </li>
</ul>

<h1 id="tecnologias">Tecnologias usadas</h1>

<ul>
    <li>
        <a href="https://github.com/facebook/react-native">React Native</a>
    </li>
    <li>
        <a href="https://github.com/reduxjs/redux">Redux</a>
    </li>
    <li>
        <a href="https://github.com/microsoft/TypeScript">TypeScript</a>
    </li>
     <li>
        <a href="https://github.com/benhurott/react-native-masked-text">React Native Masked Text</a>
    </li>
    <li>
        <a href="https://docs.expo.io/">Expo</a>
    </li>
    <li>
        <a href="https://github.com/styled-components/styled-components">Styled Components</a>
    </li>
    <li>
        <a href="https://github.com/axios/axios">Axios</a>
    </li>
    <li>
        <a href="https://react-hook-form.com/">React Hook Forms</a>
    </li>
    <li>
        <a href="https://react-icons.github.io/react-icons/">React Icons</a>
    </li>
    <li>
        <a href="https://github.com/lottie-react-native/lottie-react-native">Lottie React Native</a>
    </li>
    <li>
        <a href="https://github.com/auth0/jwt-decode">JWT Decode</a>
    </li>
    
</ul>

<h1 id="instalacao">Instalação</h1>

<p>
    Para instalar as dependências e pacotes, basta clonar o
    repositório e utilizar os seguintes scripts:
</p>

<p>Para instalar as dependências</p>

### `yarn global add expo-cli`

### `yarn`

<p>Ou com npm:</p>

### `npm install --global expo-cli`

### `npm install`

<p>Para iniciar o projeto</p>

### `yarn start`

### `npm start`

<h1 id="estrutura">Estrutura</h1>

<p>O projeto foi dividido em pastas onde cada uma possui sua particularidade e funcionalidade, são elas:</p>

![image](https://user-images.githubusercontent.com/45538100/109865076-676fd480-7c42-11eb-8186-13b5d2884f08.png)

<strong>src</strong>

<p>A pasta <b>src</b> concentra todo o projeto e suas subpastas, onde App.tsx é o arquivo de primeira chamada, o qual é utilizado para definir o uso da store <a href="#tecnologias">Redux</a> e rotas.</p>
<hr>

<strong>**tests**</strong>

<p>A pasta <b>__tests__</b> concentra todos os testes unitários.</p>
<hr>

<strong>images</strong>

<p>A pasta <b>images</b> concentra todas as imagens utilizadas.</p>
<hr>

<strong>interfaces</strong>

<p>A pasta <b>interfaces</b> concentra todas as interfaces do <a href="#tecnologias">TypeScript</a> que foram utilizadas.</p>
<hr>

<strong>animations</strong>

<p>A pasta <b>animations</b> concentra todas as animações (gifs, json, svgs) utilizadas.</p>
<hr>

<strong>screens</strong>

<p>A pasta <b>screens</b> é dividida em subpastas as quais os títulos são as páginas e estilizações da
    aplicação.</p>
<hr>

<strong>components</strong>

<p>A pasta <b>components</b> é dividida em subpastas as quais os títulos são os componentes reutilizaveis e suas estilizações.</p>
<hr>

<strong>routes</strong>

<p>A pasta <b>routes</b> possui as rotas para as outras telas da aplicação.</p>
<hr>
<strong>service</strong>
<p>A pasta <b>service</b> possui a url base da api consumida no desenvolvimento da aplicação.
<hr>

<strong>store</strong>

<p>A pasta <b>store</b> é utilizada para armazenar os arquivos referentes ao <a href="#tecnologias">Redux</a>, a qual
    possui um arquivo <b>Index</b> para criar sua store e a subpasta <b>modules</b> para as actions e reducers do <a href="#tecnologias">Redux</a></p>

<h1 id="features">Features</h1>

- [x] Cadastro de usuários;
- [x] Controle de sessão (Login);
- [x] Listar planos de conta;
- [x] Depósitos e transferências;
- [x] Atualização de saldo;
- [x] Consultas de lançamentos por datas (extrato);
- [x] Uso de Styled Components;
- [x] Uso de arquitetura FLUX com o react-redux;
- [x] Uso de AsyncStorage;
- [x] Controle de rotas;
- [x] Hooks;
- [x] Consumo de api;
- [x] Uso de typescript;
- [x] Fidelização de <a href="https://www.figma.com/file/tMkyFwxkBMdlFOf3b2q20P/DesafioGamaAccenture_1_2-mobile?node-id=0%3A1">layout</a>;
- [x] Testes unitários;
- [x] Máscara e validação de inputs;

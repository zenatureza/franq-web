# franq-web

Aplicação que permite visualização de dados financeiros como cotação de moedas e ações. Além disso é possível visualizar uma evolução de preços destes itens através de gráficos.
Disponível em:

- https://infallible-tesla-6a3d96.netlify.app/
- https://franq-app.zenatureza.com/


## Rodando a aplicação

Para executar a aplicação em modo de desenvolvimento siga os passos abaixo.

## Como rodar a aplicação [desenvolvimento]

Primeiramente instale o gerenciador de pacotes yarn (https://classic.yarnpkg.com/en/docs/install/), o Node.js (https://nodejs.org/en/download/) e o git (https://git-scm.com/downloads). Depois em um terminal rode os seguintes comandos para executar o programa:

```shell
# Baixa o repositório
git clone https://github.com/zenatureza/franq-web

# Acessa o diretório
cd franq-web

# Instala os pacotes necessários
yarn install
```

Depois, crie um arquivo .env na raíz do projeto chamado '.env'. Para adicionar as variáveis ambiente necessárias, basta copiar o conteúdo do .env.example e atribuir valores a cada uma.

- REACT_APP_API_BASE_URL: Indica o endereço aonde a api 'franq-api' está rodando (e.g. http://localhost:3333)

Agora sim é possível inicializar a app, usando:

```shell
# Roda o servidor de desenvolvimento
yarn start
```

## Como usar a aplicação

Para visualização dos dados é necessário que você esteja autenticado no sistema. Para isso, crie uma conta e depois realize o login.
Depois você verá a tela inicial contendo as cotações do dia de moedas e ações. Clicando sobre os itens é possível visualizar um gráfico com as evoluções de preços do item selecionado.

# SPA para Tutoriais

Este projeto é uma Single-Page Application (SPA) desenvolvida em Angular. O objetivo principal é centralizar e facilitar o acesso a tutoriais sobre o uso do sistema "Feira Legal", auxiliando cidadãos e profissionais a realizarem procedimentos como solicitação de alvarás, habite-se e gestão de usuários.

## 🚀 Tecnologias Utilizadas

- **Angular:** Framework principal para a construção da SPA.
- **HTML5:** Estruturação semântica do conteúdo.
- **SCSS:** Estilização avançada, com uso de variáveis, aninhamento e design responsivo.
- **TypeScript:** Linguagem base para o desenvolvimento com Angular.

## ✨ Funcionalidades Implementadas

- **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (desktops, tablets e celulares), garantindo uma experiência de usuário consistente em qualquer dispositivo.
- **Navegação Intuitiva:**
  - Menu de navegação fixo no topo com links âncora, permitindo rolagem suave para as seções de interesse.
  - Menu "hambúrguer" para dispositivos móveis, otimizando o espaço e a usabilidade.
- **Visualizador de PDF Integrado:** Um tutorial em formato PDF é renderizado diretamente na página através de um componente Angular, evitando a necessidade de download imediato.
- **Incorporação de Mídia Externa:** Tutoriais em vídeo são incorporados a partir do YouTube usando `<iframe>`, integrando conteúdo multimídia de forma fluida.
- **Componentização:** A estrutura do projeto é organizada em componentes, como o `HomeComponent`, que encapsula toda a lógica e visualização da página.
- **Usabilidade:** Implementação de um botão "Voltar ao Topo" que aparece durante a rolagem da página, melhorando a navegação em páginas longas.

## 📦 Deploy no GitHub Pages
Este projeto é publicado automaticamente no GitHub Pages. 
Para realizar um novo deploy, siga os passos: 
1. Certifique-se de que a biblioteca angular-cli-ghpages está instalada. Se não, instale com ng add angular-cli-ghpages.
2. Execute o comando de deploy, ajustando o base-href para o nome do repositório: bash ng deploy --base-href=/SPA-Responsivo-para-Tutoriais/ 
Pronto! Seguindo esses passos, seu projeto estará online para que todos possam ver. Se tiver qualquer dúvida durante o processo, pode perguntar!



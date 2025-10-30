export const templates = {
  inicio: `
    <section class="banner-home">
      <h1>Transformando vidas, preservando o futuro.</h1>
      <p>Conheça o Projeto Viva ONG e <a href="#" data-page="cadastro" class="banner-btn">junte-se à missão!</a></p>
    </section>
    <section class="depoimentos">
      <h2>Depoimentos</h2>
      <div class="depoimentos-list">
        <blockquote>"O Viva ONG me ajudou a crescer e mudar o mundo." <span>- Aline Souza</span></blockquote>
        <blockquote>"A melhor experiência de voluntariado que já tive!" <span>- Carlos Lima</span></blockquote>
      </div>
    </section>
    <section class="noticias">
      <h2>Notícias</h2>
      <div class="card-list">
        <div class="card">
          <span class="noticia-icone">🧣</span>
          <h3>Campanha do Agasalho: Sucesso!</h3>
          <p>Arrecadamos mais de 600 peças em nossa ação de julho.</p>
        </div>
        <div class="card">
          <span class="noticia-icone">🌱</span>
          <h3>Nova Horta Comunitária</h3>
          <p>Inaugurada nossa primeira horta com ajuda de voluntários.</p>
        </div>
      </div>
    </section>
    <section class="chamada-voluntario">
      <h2>Seja um voluntário</h2>
      <p>Participe, traga suas ideias e habilidades e faça parte deste movimento de transformação!</p>
      <a href="#" data-page="cadastro" class="btn-voluntario">Quero ser voluntário</a>
    </section>
  `,
  cadastro: `
    <section class="cadastro-container">
      <div class="cadastro-banner">
        <h2>Junte-se ao Projeto Viva ONG</h2>
        <p>Contribua para transformar vidas e o futuro da sua comunidade!</p>
      </div>
      <form class="cadastro-form">
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="text" name="sobrenome" placeholder="Sobrenome" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="text" name="cpf" placeholder="CPF" required />
        <input type="text" name="telefone" placeholder="Telefone" required />
        <input type="date" name="nascimento" placeholder="Data de Nascimento" required />
        <h3>Endereço</h3>
        <input type="text" name="endereco" placeholder="Endereço completo" required />
        <input type="text" name="cep" placeholder="CEP" required />
        <input type="text" name="cidade" placeholder="Cidade" required />
        <input type="text" name="estado" placeholder="Estado" required />
        <label>Interesses e experiências</label>
        <textarea name="interesses" placeholder="Descreva como pode colaborar, habilidades, horários, etc."></textarea>
        <button type="submit" class="btn">Enviar Cadastro</button>
      </form>
    </section>
  `,
  projeto: `
    <section class="chamada-voluntario">
      <h2>Seja um voluntário</h2>
      <p>Participe, traga suas ideias e habilidades e faça parte deste movimento de transformação!</p>
      <a href="#" data-page="cadastro" class="btn-voluntario">Quero ser voluntário</a>
    </section>
    <section class="card-grid">
      <div class="card-flip" data-category="social">
        <div class="card-front">
          <span class="projeto-icone">🦷</span>
          <h3>Refazer Sorrisos</h3>
          <p>Atendimento odontológico voluntário para famílias carentes.</p>
          <span class="projeto-status andamento">Em andamento</span>
        </div>
        <div class="card-back">
          <h4>Detalhes</h4>
          <p>Consultas mensais, doação de kits de higiene dental, relatos emocionantes dos beneficiados.</p>
          <a href="#" class="btn-card">Saiba mais</a>
        </div>
      </div>
      <div class="card-flip" data-category="ambiental">
        <div class="card-front">
          <span class="projeto-icone">🌳</span>
          <h3>Paisagismo Solidário</h3>
          <p>Plantio de árvores e limpeza de canteiros públicos com voluntários.</p>
          <span class="projeto-status concluido">Concluído</span>
        </div>
        <div class="card-back">
          <h4>Detalhes</h4>
          <p>Mais de 150 mudas plantadas e recuperação de praças em setembro.</p>
          <a href="#" class="btn-card">Fotos do projeto</a>
        </div>
      </div>
    </section>
  `
};
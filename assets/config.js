/* =====================================================================
   Marqques Barbershop — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Marqques Barbershop',
  slogan:     'Estilo • Tradição • Atitude',
  instagram:  'marqquesbarbershop',

  // WhatsApp da barbearia em formato internacional, só dígitos.
  // A CONFIRMAR com o Mike: enquanto estiver vazio, os botões de contato
  // levam para o Direct do Instagram.
  whatsapp:        '',
  whatsappVisivel: '',

  endereco: {
    linha1: 'Rua Afonso Celso, 532',
    linha2: 'Barra, Salvador — BA',
    maps:   'https://www.google.com/maps/search/?api=1&query=Rua+Afonso+Celso+532+Barra+Salvador+BA',
    busca:  'Marqques Barbershop, Rua Afonso Celso, 532, Barra, Salvador - BA'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora, como no agendas.link
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) ------------------------------------
     Segunda a sábado, das 9h às 19h: é o que o agendas.link abre hoje
     para os três barbeiros (conferido em 23/09/2026).
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '09:00', fecha: '19:00' },
    2: { aberto: true, abre: '09:00', fecha: '19:00' },
    3: { aberto: true, abre: '09:00', fecha: '19:00' },
    4: { aberto: true, abre: '09:00', fecha: '19:00' },
    5: { aberto: true, abre: '09:00', fecha: '19:00' },
    6: { aberto: true, abre: '09:00', fecha: '19:00' }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     No ar de verdade, barbeiros e serviços vêm do banco, não daqui.
     Os mesmos três profissionais do agendas.link. Sem foto = iniciais.
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'mike',      slug:'mike',      nome:'Mike Marques',    foto:'fotos/mike.jpg',     instagram:'mikemarqques' },
    { id:'silvania',  slug:'silvania',  nome:'Silvânia',        foto:'',                   instagram:'' },
    { id:'leonardo',  slug:'leonardo',  nome:'Leonardo Santos', foto:'fotos/leonardo.jpg', instagram:'' }
  ],

  // Preços e durações copiados do agendas.link da Marqques (set/2026).
  // preco_centavos 0 = "sob consulta".
  servicosDemo: [
    { id:'experiencia-marqques', nome:'Experiência Marqques', descricao:'Corte de cabelo, modelagem da barba, toalha quente ou vapor de ozônio, sobrancelha e finalização.', preco_centavos:12000, a_partir_de:false, duracao_min:45, categoria:'Assinatura' },
    { id:'corte',         nome:'Corte',                 descricao:'Corte pensado no seu formato de rosto, textura e estilo.', preco_centavos:5500,  a_partir_de:false, duracao_min:30, categoria:'Cabelo' },
    { id:'pezinho',       nome:'Pezinho',               descricao:'Acabamento do contorno entre um corte e outro.',           preco_centavos:2500,  a_partir_de:false, duracao_min:15, categoria:'Cabelo' },
    { id:'hidratacao',    nome:'Hidratação',            descricao:'Para cabelos ressecados e quebradiços.',                   preco_centavos:0,     a_partir_de:false, duracao_min:20, categoria:'Cabelo' },
    { id:'corte-barba',   nome:'Corte + Barba Simples', descricao:'O combo completo, cabelo e barba no mesmo horário.',       preco_centavos:10500, a_partir_de:false, duracao_min:45, categoria:'Combos' },
    { id:'barba-simples', nome:'Barba simples',         descricao:'Barba com excelência e técnica.',                          preco_centavos:5000,  a_partir_de:false, duracao_min:30, categoria:'Barba' },
    { id:'barboterapia',  nome:'Barboterapia',          descricao:'Barba feita com toalha quente ou vapor de ozônio.',        preco_centavos:5500,  a_partir_de:false, duracao_min:30, categoria:'Barba' },
    { id:'sobrancelha',   nome:'Sobrancelha',           descricao:'Desenho na medida, sem exagero.',                          preco_centavos:2000,  a_partir_de:false, duracao_min:10, categoria:'Detalhes' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);

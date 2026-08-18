# LGPD+ — Landing Page (estática)

Réplica da landing page do WordPress (`lgpdmais.site`) em **HTML/CSS puro**, sem backend. Planejada para hospedar no **GitHub Pages**.

## Estrutura

```
lgpdmais-landing/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos (fundo escuro + verde neon, botão animado, accordion)
├── js/
│   └── main.js         # Accordion de Perguntas Frequentes
├── assets/
│   └── img/            # Imagens baixadas do WordPress original
└── .gitignore
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub e envie este conteúdo (`git remote add origin <url>` + `git push`).
2. No GitHub: **Settings → Pages → Source: Deploy from a branch → branch `main`, pasta `/`**.
3. O site fica disponível em `https://<usuario>.github.io/<repositorio>/`.

### Usando domínio próprio (ex.: `lgpdmais.site`)
- Crie um arquivo `CNAME` na raiz com o domínio (ex.: `www.lgpdmais.site`).
- No painel do domínio, configure os registros DNS do GitHub Pages (A/CNAME apontando para `185.199.108.153` etc.).
- Documentação oficial: https://docs.github.com/pt/pages

## Links dos CTAs

Os botões "PROTEJA MINHA EMPRESA AGORA!" apontam para:
- `#price` (âncora da seção de preço)
- `https://metodo.lgpdmais.com.br/site.php` (sistema de cursos — verificar se esse destino continua ativo)

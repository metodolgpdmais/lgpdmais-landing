# LGPD+ — Landing Page (estática)

Réplica fiel da landing page do WordPress (`lgpdmais.site`) em **HTML/CSS/JS estático**, sem backend. Hospedada no **GitHub Pages**.

## Estrutura

```
lgpdmais-landing/
├── index.html          # Página principal (estrutura HTML renderizada do Elementor)
├── assets/             # CSS, JS e imagens da página (renomeados do original)
└── .gitignore
```

> O `index.html` e os arquivos em `assets/` são a versão **estática renderizada** da página original (salva via navegador e validada visualmente como idêntica). Inclui os estilos Elementor e o comportamento de accordion das perguntas frequentes, tudo funcionando sem WordPress.

## Deploy no GitHub Pages

1. O repositório já está publicado em `https://metodolgpdmais.github.io/lgpdmais-landing/` com Pages ativado (branch `main`, pasta `/`).
2. Para atualizar: faça o commit e `git push` — o Pages publica automaticamente.

### Usando domínio próprio (ex.: `lgpdmais.site`)
- Crie um arquivo `CNAME` na raiz com o domínio (ex.: `www.lgpdmais.site`).
- No painel do domínio, configure os registros DNS do GitHub Pages (A/CNAME apontando para `185.199.108.153` etc.).
- Documentação oficial: https://docs.github.com/pt/pages

## Links dos CTAs

Os botões "PROTEJA MINHA EMPRESA AGORA!" apontam para:
- `#price` (âncora da seção de preço)
- `https://metodo.lgpdmais.com.br/site.php` (sistema de cursos — **verificar se esse destino continua ativo**, pois o `site.php` não existe no VideoAulas+ de produção)

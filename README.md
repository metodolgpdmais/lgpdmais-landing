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

## Publicação

- **Repositório**: `https://metodolgpdmais.github.io/lgpdmais-landing/` (GitHub Pages, branch `main`, pasta `/`).
- **Domínio**: `https://lgpdmais.site` (via arquivo `CNAME` + registros DNS apontando para o GitHub Pages).

### DNS (registros ativos)
| Tipo | Nome | Conteúdo |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `metodolgpdmais.github.io` |

Para atualizar o site: faça o commit e `git push` — o Pages publica automaticamente.

## Links dos CTAs

Os botões "PROTEJA MINHA EMPRESA AGORA!" apontam para:
- `#price` (âncora da seção de preço)
- `https://metodo.lgpdmais.com.br/site.php` (sistema de cursos — **verificar se esse destino continua ativo**, pois o `site.php` não existe no VideoAulas+ de produção)

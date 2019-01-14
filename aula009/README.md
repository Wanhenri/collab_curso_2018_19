### Protocolos de acesso

<p>acrescentar o protocolo SSH </p>

Primeiramente iremos remover o repositório remoto existe no Local;

```
git remote remove origin
```

Em seguida iremos acrescentar o repositório local utilizando o protocolo SSH.

```
git remote add origin git@github.com:<repositorio>
```

Depois basta seguir os precimento padrão

```
git push ; git add <file> ou '.'; git status; git commit -m ""; git push -u origin master
```

<p>Precisamos criar uma chave pública para o nosso SSH.</p>
<p> Vamos em 'usuário', 'settings', clique em 'SSH and GPG Keys'. Na área 'SSH and GPG Keys', vamos clicar em 'New SSH key', porém antes disso é preciso gerar a chave.</p>
<p>Clicaremos em 'generating SSH keys', em seguida clicaremos no link 'Generating a new SSH key and adding it to the ssh-agent', mostrará um guia de como gerar.</p>
<p>Após seguir o sugerido, voltaremos para o 'New SSh Key'. Acrescentando informações em 'Title' e 'Key'.</p>

> obs.: A chave é criada por máquina.

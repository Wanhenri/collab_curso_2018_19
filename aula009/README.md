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

<p>Mas antes disso precisamos gerar a chave</p>

> obs.: A chave é criada por máquina.

<p>Para gerar entraremos em **generating SSH keys**, que se encontrando na pagina *SSH and GPG*, após isso clique em *Generating a new SSH key and adding it to the ssh-agent*</p>
  
  
### Generating a new SSH key

- Open Terminal.

-  Paste the text below, substituting in your GitHub email address.
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
- This creates a new ssh key, using the provided email as a label.
```
Generating public/private rsa key pair.
```
- When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.
```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```
- At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

Após seguir os passos acima, retornaremos para o "New SSH Key". Na parte 'title', podemos colocar o nome da máquina que esta salva essa chave.

> obs.: A chave é por máquina.

em seguida abriremos o arquivo gerado chamado "id_rsa.pub", copiaremos a Key gerada e em seguida copiar no campo 'Key'. Após isso, clique em "Add SSH key". Pronto, finalizado.

<p> Agora podemos dar um git push -u origin master, e não precisará mais da senha</p>

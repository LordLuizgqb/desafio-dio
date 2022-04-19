## Erro: Could not create SSL/TLS secure channel

Aparentemente esse erro é por causa do win 7, para resolver:

1) Aperte win+R e escreva regedit
2) Entre na pasta **HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols**
3) Abra o menu com o botão esquerdo do mouse na da pasta **Protocols**
4) Vai em Novo e escolha **chave**
5) Renome com **TLS 1.2**
6) Na pasta **TSL 1.2**, Crie uma nova pasta com o nome **Client**
7) Em **Client**, abra o menu, vá em novo e escolha valor DWORD 32 bits
8) Renomeie como **DisabledByDefault**, abra o menu encima e escolha modificar
9) veja se o valor é 0 e a opção hexadecimal é a escolhida
10) em **Client**, abra o menu, vá em novo e escolha valor DWORD 32 bits novamente
11) renomeie como **Enabled**, abra o menu encima e escolha modificar
12) coloque o valor com 1 e a opção hexadecimal deve ser a escolida

[Vídeo em inglês](https://www.youtube.com/watch?v=LK7-YNpxEhA)

[Site da Microsoft](https://support.microsoft.com/en-us/topic/update-to-enable-tls-1-1-and-tls-1-2-as-default-secure-protocols-in-winhttp-in-windows-c4bd73d2-31d7-761e-0178-11268bb10392#bkmk_easy)
programa
{
	
	funcao inicio()
	{
		real mes1,mes2,mes3,mes4,media,total
		cadeia nome
		
		escreva("Digite o seu nome: ")
		leia(nome)
		escreva("Seu nome é " + nome)
		escreva(" Venda no mês de Janeiro: ")
		leia(mes1)
		escreva("Venda no mês de Fevereiro: ")
		leia(mes2)
		escreva("Venda no mês de Março: ")
		leia(mes3)
		escreva("Venda no mês de Abril: ")
		leia(mes4)

		total = mes1+mes2+mes3+mes4
		media = total/4
		escreva("o seu total foi de: " + total + " e sua media foi: " + media)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 428; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
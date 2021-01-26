bordas arredondadas (border-radius)
sombras (text-shadow) - textos
(box-shadow) - bloco.

transformações 2D:
    translate() - recebe dois parametros;
    rotate() - rotaciona em graus;
    scale() - redimenciona o tamanho;
    skewX() - deformar em relação ao eixo X;
    skewY() - deformar em relação ao eixo Y;
    matrix() - JUNTA TODAS AS FUNÇÕES.

transições
    onde o efeito vai ser adicionado, direção, lado;
    duração dele, em segundos;
    transition-timing-function: define a curva de velocidade de transição;
    transition-delay;

    apenas transition: (4 valores acima);


Animação:
    @keyframes;

    @keyframes nomeX{
        from{elementos de entrada}
        to{elementos de saída}
    }

    * no css, tem que chamar a Animação:
        animation-name: nomeX;
        animation-duration: duração da Animação;

    também é possível fazer a Animação em porcentagem:
        ex: em 0%: faça isso;
            em 25%: faça isso;
            em 50%: faça isso;
            em 100%: faça isso;
    
    animation-interation-count: 3; //repete 3x

Media Queries
    permite mudar o estilo de acordo com as caracteristicas do aparelho
    que está renderizando o site;
    
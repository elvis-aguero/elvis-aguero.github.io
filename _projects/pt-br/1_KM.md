---
page_id: prj_km
layout: page
title: Simulação de impactos deformáveis
description: O método de matching cinemático
img: assets/img/km-sphere.gif
importance: 1
category: work
related_publications: true
---

Todos nós ficamos felizes ao calcular a trajetória de um objeto em queda livre. Mas como realmente resolvemos o que acontece logo depois, durante uma colisão inelástica? As interações envolvidas são altamente não lineares e, muitas vezes, os objetos em colisão podem se deformar ao entrar em contato.

<figure style="float: left; margin: 10px; max-width: 300px;">
    {% include figure.liquid loading="eager" path="assets/img/km-sphere.gif" title="example image" class="img-fluid rounded z-depth-1" style="width: 100%;" %}
    <figcaption style="text-align: center; margin-top: 5px;">
        Exemplo de simulação de uma esfera sólida impactando uma membrana elástica.
    </figcaption>
</figure>

Este problema é relevante porque tem muitas aplicações, desde robôs flexíveis, até dentes de engrenagens e até astrofísica. Em geral, você tem uma EDP (Equação Diferencial Parcial) e algumas restrições não lineares que representam o problema. O KM (Kinematic Match) define uma nova restrição na superfície de contato, impondo que o ângulo de incidência entre os dois objetos seja suave. Tem a vantagem de introduzir uma ideia intuitiva (fácil de codificar = pode ser implementado rapidamente em configurações industriais), ao mesmo tempo em que aumenta a precisão.
Esta estrutura é agnóstica à técnica utilizada para aproximar a EDP, portanto, pode ser implementada usando um esquema de diferenças finitas, ou elementos finitos, ou mesmo um método variacional.

Implementamos com sucesso o KM para o caso de uma esfera rígida impactando contra uma membrana elástica e atualmente estamos trabalhando em outros casos, principalmente uma gota deformável impactando diferentes superfícies - rígidas ou não.

Escrevemos um artigo (ver {% cite aguero2022impact %}) onde estudamos experimentalmente e numericamente o impacto deformável acoplado entre uma esfera sólida e uma membrana elástica.

O trabalho atual envolve a extensão desta estrutura para outros problemas. Atualmente, estamos trabalhando no problema de uma gota de água deformável impactando contra um banho de fluido. Nosso modelo é particularmente adequado para impactos de baixa velocidade, onde simulações numéricas diretas podem se tornar computacionalmente muito caras. Aqui estão três dos repositórios que temos para esses problemas:

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    {% include repository/repo.liquid repository='elvispy/kinematic-match-sphere' %}  
    {% include repository/repo.liquid repository='elvispy/km-dropplet-solidsubstrate-v3' %}  
    {% include repository/repo.liquid repository='elvispy/km-dropplet-onto-bath' %}  
</div>
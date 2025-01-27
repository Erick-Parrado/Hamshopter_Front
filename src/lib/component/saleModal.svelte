<script lang='ts'>
    let {show=false} = $props()
</script>
{#if show}
<div class='modal_background'>
 <form id="sale_form">
    <h1 id="entrega_titulo">Detalles de entrega</h1>
    <label id="lb_nombre" for="nombre">Nombres y apellidos</label>
    <input id="nombre" name="nombre" type="text"/>
    <label id="lb_id" for="id">Documento de identificación</label>
    <select  id="tipo_id" name="tipo_id">
        <option>CC</option>
    </select>
    <input id="id" name="id" type="text"/>
    <label id="lb_envio" for="envio">Envió</label>
    <input id="envio" type="checkbox"/>
    <label id="lb_direccion" for="direccion">Dirección</label>
    <input id="direccion" type="text"/>
    <h1 id="pago_titulo">Detalles de pago</h1>
    <label id="lb_num_tarjeta" for="num_tarjeta">Numero de tarjeta</label>
    <input name="num_tarjeta" id="num_tarjeta" type="text" maxlength="1"/>
    <label id="lb_cliente_titular" for="cliente_titular">¿El cliente es el titular?</label>
    <input id="cliente_titular" name="cliente_titular" type="checkbox"/>
    <label id="lb_titular" for="titular">Nombre titular</label>
    <input id="titular" name="titular" type="text"/>
    <label id="lb_titular_id" for="titular_id">Documento de identificación</label>
    <select  id="titular_tipo_id" name="titular_tipo_id">
        <option>CC</option>
    </select>
    <input id="titular_id" name="titular_id" type="text"/>
    <label id="lb_fecha_exp" for="fecha_exp">Fecha de expiración</label>
    <input id="fecha_exp" name="fecha_exp" type="text"/>
    <label id="lb_ccv" for="ccv">Código de seguridad</label>
    <input id="ccv" name="ccv" type="text"/>
    <a href="/compra/1" id="submit_a">
        <input type="submit" name="Enviar" id="submit"/>
    </a>
    <button id="cancelar"> Cancelar</button>
 </form>
</div>
{/if}
<style le lang='sass'>
    @import src\app.sass

    .modal_background
        display: flex
        align-items: center
        justify-content: center

        position: absolute
        top: 0
        left: 0
        z-index: 5

        height: 100vh
        width: 100vw

        background: #000A

        #sale_form
            display: grid
            grid-template-columns: 2em 6em 3em 6em
            grid-template-rows: 3em repeat(7,min-content)  repeat(9,min-content) 3em 3em
            column-gap: 5px

            height: auto
            width: fit-content

            padding: 2em 

            background: #fff

            border-radius: 5px

            font: 17px Jaldi-R

            input[type="text"], select
                border-radius: 5px
                border-width: 1px
                border-style: solid
                height: 2em

            h1
                margin: 0
                font: 2em Itim-R
                text-align: center

            #entrega_titulo
                grid-area: 1 / 1 / 2 / 5
            
            #lb_nombre
                grid-area: 2 / 1 / 3 / 5

            #nombre
                grid-area: 3 / 1 / 4 / 5

            #lb_id
                grid-area: 4 / 1 / 5 / 5
            
            #tipo_id
                grid-area: 5 / 1 / 6 / 2
            
            #id
                grid-area: 5 / 2 / 6 / 5

            #lb_envio
                grid-area: 6 / 1 / 7 / 2
            
            #envio
                grid-area: 6 / 2 / 7 / 3
                justify-self: left

            #lb_direccion
                grid-area: 7 / 1 / 8 / 5

            #direccion
                grid-area: 8 / 1 / 9 / 5
            
            #pago_titulo
                grid-area: 9 / 1 / 10 / 5
                margin-top: 0.5em

            #lb_num_tarjeta
                grid-area: 10 / 1 / 11 / 5

            #num_tarjeta
                grid-area: 11 / 1 / 12 / 5

            #lb_cliente_titular
                grid-area: 12 / 1 / 13 / 4

            #cliente_titular
                grid-area: 12 / 3 / 13 / 4

            #lb_titular
                grid-area: 13 / 1 / 14 / 5

            #titular
                grid-area: 14 / 1 / 15 / 5

            #lb_titular_id
                grid-area: 15 / 1 / 16 / 5

            #titular_id
                grid-area: 16 / 2 / 17 / 5
            
            #titular_tipo_id
                grid-area: 16 / 1 / 17 / 2

            #lb_fecha_exp
                grid-area: 17 / 1 / 18 / 3
                
            #fecha_exp
                grid-area: 18 / 1 / 19 / 3

            #lb_ccv
                grid-area: 17 / 3 / 18 / 5
                
            #ccv
                grid-area: 18 / 3 / 19 / 5
            
            #submit_a
                grid-area: 19 / 1 / 20 /5
                
                margin-top: 1em

                width: 50%

                justify-self: center

                #submit
                    height: 100%
                    width: 100%

                    background: var(--main-color)

                    border: none
                    border-radius: 5px

                    font: 1em Itim-R
                    color: #FFF

            #cancelar
                grid-area: 20 / 1 /21 /5
                
                margin-top: 1em

                width: 50%

                justify-self: center

                border-color: #434343

                border-radius: 5px
                border-width: 2px
                border-style: solid

                font: 1em Itim-R
                color: #434343
            


            

            
</style>
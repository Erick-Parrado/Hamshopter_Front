<script lang="ts">
    import receipt_top from "$lib/images/receipt-top.svg"
    import receipt_bottom from "$lib/images/receipt-bottom.svg"
    import HamCard from "$lib/component/hamCard.svelte";
    import HamRecord from "$lib/component/hamRecord.svelte";
    import OtherRecord from "$lib/component/otherRecord.svelte";

    let num_orden = 0
    let num_transaccion = 0
    let cliente = "Juan Jasinto"
    let id = 12223324234
    let tipo_id = "CC"
    let direccion = "CRA 34 # 12 - 97"
</script>
<h1 class="section_title">Resumen de compra</h1>
<div class="receipt">
    <div class="receipt-top" style="background-image: url({receipt_top});"></div>
    <div class="receipt-content">
        <h2>Orden #{num_orden}</h2>
        <h3>14/01/25</h3>
        <h3>Transacción #{num_transaccion}</h3>
        <h4>Cliente</h4>
        <p>{cliente}</p>
        <h4>Identificación</h4>
        <p>{tipo_id} {id}</p>
        <h4>Dirección</h4>
        <p>{direccion}</p>
        <HamRecord/>
        <OtherRecord record="Recargo a domicilio" price="$5.000"/>
        <OtherRecord record="Total" price="$55.000"/>
        <a href="/">
            <button id="to_shop">
                Volver a la tienda
            </button>
        </a>


    </div>
    <div class="receipt-bottom"  style="background-image: url({receipt_bottom});"></div>

</div>
<style lang="sass" global>
    @import src\app.sass
    
    main
        display: flex
        align-items: center
        flex-flow: column


        .section_title
            font: 2em Itim-R

        .receipt
            height: auto

            font: 16px Jaldi-R

            .receipt-top
                position: relative
                top: 0.5em
                height: 2.1em
                width:30em
                z-index: 1

                object-fit: contain
                background-repeat: no-repeat

            .receipt-content

                background: #FFF
                height: auto
                width: 30em

                padding: 1em 2em

                border-left: 2px #24c8a7 dashed 
                border-right: 2px #24c8a7 dashed 

                &> h1,h2,h3,h4,p,span
                    margin: 0

                h2,h3
                    text-align: center
                
                #to_shop
                    height: 2em
                    width: 100%

                    background: var(--main-color)

                    margin-top: 1rem

                    border: none
                    border-radius: 5px

                    font: 1.5em Itim-R
                    color: #FFF

            .receipt-bottom
                position: relative
                bottom: 0.5em
                height: 2.1em
                width:30em
                z-index: 1

                object-fit: contain
                background-repeat: no-repeat

</style>
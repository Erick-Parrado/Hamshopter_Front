<script>
    import { compra } from "../../stores/compra";

    let count = $state(0)
    
    let {item} = $props()

    $effect(()=>{
        compra.update((c)=>{
            Object.assign(c.items,{[item.id]:{
                nombre:item.nombre,
                precio:item.precio,
                cantidad:count,
                total:count*item.precio
            }})
            return c
        })
    })

    compra.subscribe((c)=>{
        console.log(c)
    })

    const addFriends = () =>{
        if(count<item.stock){
            count++
        }
    }
    
    const removeFriend = () =>{
        if(count>0){
            count--
        }
    }
    
</script>
<div class="ham_card">
    <img src={item.image} alt="mumu">
    <div id="main_info">
        <span id="name">Hamster Blanco</span>
        <span id="stock">Disponibles: {item.stock}</span>
        <span id="price">${item.precio}</span>
    </div>
    <!--Informacion de producto-->
    <span id="label_weigh" class="product_label">Peso aproximado</span>
    <span id="weigh" class="product_info">{item.caracteristicas.peso_aproximado}gr</span>
    <span id="label_feeding" class="product_label">Alimentacion</span>
    <span id="feeding" class="product_info">{item.caracteristicas.alimentacion}</span>
    <!--Contador para compra-->
    <span id="friend_counter">{count}</span>
    <button id="more_friends" onclick={addFriends}>+</button>
    <button id="less_friends" onclick={removeFriend}>-</button>
</div>
<style lang='sass'>
    @import src\app.sass

    .ham_card
        display: grid

        height: 10em
        width: min-content

        grid-template-columns: 10em 14em 14em 6em 6em
        grid-template-rows: 5em 2.5em 2.5em

        overflow: hidden

        border-radius: 5px

        font: 12px Jaldi-R

        img
            height:100%
            width:100%

            object-fit: cover

            grid-column: 1
            grid-row: 1/4

        #main_info
            position: relative
            background-color: var(--main-color)
            color: #FFF

            grid-column: 2/4

            #name
                position: absolute
                left: 0.5em
                top: 0em

                font: 2em Jaldi-B

            #stock
                position: absolute
                left: 0.8em
                bottom: 0.6em

                font: 1.2em Jaldi-R

            #price
                position: absolute
                right: 0.8em
                bottom: 0.5em

                font: 2em Jaldi-B

        #friend_counter
            grid-row: 1/4
            grid-column: 4
            border-color: #d9d9d9
            border-width: 2px 0 2px 0
            border-style: solid
            text-align: center
            align-content: center
            font-size: 1.5em

        #more_friends
            grid-row: 1
            grid-column: 5

            background: var(--main-color)

            &:active
                background: white

        #less_friends
            grid-row: 2/4
            grid-column: 5

            background: #c4c4c4

        // #label_weigh
        //     grid-row: 2
        //     grid-column: 2


        // #label_feeding
        //     grid-row: 3
        //     grid-column: 2

        .product_label
            padding: 0.5em
            background: #c4c4c4
            border-top: 2px #FFF solid

        .product_info
            padding: 0.5em
            background: #d9d9d9
            border-top: 2px #FFF solid

        button
            border: none
            font-size: 2em
            color: #FFFFFF

</style> 
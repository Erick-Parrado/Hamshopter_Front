<script lang="ts">
    
</script>
<div class="ham_record">
    <img id="record_image" src="/mumu_3.png" alt="mumu">
    <span id="record_title">Hamster blanco</span>
    <span id="record_price">Precio unitario: $20000</span>
    <span id="record_count_label">Cantidad</span>
    <span id="record_count">1</span>
    <span id="record_total_label">Total</span>
    <span id="record_total">$50.000</span>
</div>
<style lang="sass">
    .ham_record
        display: grid
        height: 4em
        width: 100%

        overflow: hidden

        grid-template-columns: 4em 45% 18% auto
        grid-template-rows: 2em 1em 1em

        border-radius: 5px

        background: #24c8a7

        *
            box-sizing: border-box
            align-self: center
            font: 1em Jaldi-R
            height: 100%
            
        
        
        #record_image
            grid-area: 1 / 1 / 4 / 2
            height: 100%
            width: 100%

        #record_title 
            grid-area: 1 / 2 / 2 / 3
            font: 1.2em Jaldi-B
            padding-left: 0.5rem
            color: #FFF
            align-self: flex-end
        
        #record_price
            grid-area: 2 / 2 / 3 / 3
            padding-left: 0.5rem
            color: #FFF

        #record_count_label
            grid-area: 1 / 3 / 2 / 4
            align-self: center
            text-align: center
            background: #c4c4c4

        #record_count
            grid-area: 2 / 3 / 4 / 4
            align-self: center
            text-align: center
            border-right: 2px #c7c7c7 solid
            background: #ececec

        #record_total_label
            grid-area: 1 / 4 / 2 / 5
            align-self: center
            text-align: center
            color: #FFF
            font: 1.2em Jaldi-B

        #record_total
            grid-area: 2 / 4 / 4 / 5
            align-self: center
            text-align: center
            background: #ececec
</style>
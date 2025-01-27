<script lang="ts">
    let {record,price} = $props()

</script>
<div class="record">
    <span id="record_title">{record}</span>
    <span id="record_price">{price}</span>
</div>
<style lang="sass">
    @import src\app.sass

    .record
        display: grid
        grid-template-columns: 78% 23%

        overflow: hidden

        height: 3em
        width: 100%
        background: #24c8a7

        border-radius: 5px

        margin-top: 1em
        
        
        *
            box-sizing: border-box
            align-self: center
            align-content: center
            font: 1em Jaldi-R
            height: 100%
    
        #record_title
            padding-left: 1em
            font: 1.2em Jaldi-B
            color: #FFF
            


        #record_price
            text-align: center
            background: #ececec

</style>
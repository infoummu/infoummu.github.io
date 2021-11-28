---
layout: page
title: TheList
---

<a name="top"></a>

### Daftar File yang di Dropbox : 

* Daftar Files hasil praktikum yang telah masuk di dropbox, daftar files ini akan selalu di update...
* Hasil Test terhadap script yang dikirim ke dropbox, hasil test script banyak yang sudah `OK`, tapi masih ada yang `Error`.

<style>
    label {
        display: block;
        font: 1rem 'Fira Sans', sans-serif;
    }

    input,
    label {
        margin: .4rem 0;
    }
</style>

<div>
    <label for="site-search">Search NPM :</label>
    <input type="search" id="npm-search" name="q"
        aria-label="Search through site content" 
        placeholder="NPM Here !" onEnter="get_data();">

    <button onclick="get_data();">Search</button>
</div>

***
<!-- ### Daftar Files:  -->

<p id="filemhs"></p>

<table border="0">
<!--### Nama2 Praktikum PGamen ALL [Update 03/12/2020:18.20] -->

<script>


var fs=[
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/Praktikum3_7__pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/Praktikum3_8__pgame.18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum1_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum2_5_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum2_6_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum3-10__pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum3_11__pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum3_12_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum3_9__pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum4_14_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum4_15_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum4_16_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum4_151_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/BOX_18040/PGAME/praktikum4_161_pgame_18040.py',
'/home/ubuntu/INFO/MK_2021/Box_18013/PGame/sc_pratikum3_pjar_18013-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18013/PGame/sc_pratikum4_pjar_18013-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/pratikum1_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/praktikum4_14_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/praktikum4_15_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/praktikum4_16_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/praktikum4_151_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PGAME/praktikum4_161_pgame_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PJaringan/praktikum1_client_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PJaringan/praktikum1_server_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PJaringan/praktikum2_client_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18016/PJaringan/praktikum2_server_18016.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum1_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum2_5_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum2_6_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_10_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_11_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_12_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_7_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_8_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum3_9_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum4_14_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum4_16_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PGAME/praktikum4_151_pgame_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PJARINGAN/praktikum1_client_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PJARINGAN/praktikum1_server_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PJARINGAN/praktikum2_client_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PJARINGAN/praktikum2_server_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18041/PJARINGAN/praktikum3_pjar_18041.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum1_pgame_18051.py.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/PGame/praktikum1_pgame_18051.py.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/PGame/praktikum4_14_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/PGame/praktikum4_15_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/PGame/praktikum4_151_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/PGame/praktikum4_161_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum2_5_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum2_6_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_10_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_11_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_12_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_7_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_8_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18051/praktikum3_9_pgame_18051.py',
'/home/ubuntu/INFO/MK_2021/Box_18069/PGame/praktikum1_pgame_8069.py,.py',
'/home/ubuntu/INFO/MK_2021/Box_18069/PGame/praktikum2_5_pgame_18069py',
'/home/ubuntu/INFO/MK_2021/Box_18069/PGame/praktikum2_6_pgame_18069.py',
'/home/ubuntu/INFO/MK_2021/Box_18069/PJaringan/praktikum4_net_18069py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum1_pgame_8077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum4_14_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum2_5_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum2_6_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_10_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_11_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_12_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_7_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_8_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum3_9_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum4_15_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum4_16_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum4_151_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PGame/praktikum4_161_pgame_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PJaringan/praktikum3_pjar_8077.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PJaringan/praktikum1_pjaringan_18077_client.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PJaringan/praktikum1_pjaringan_18077_server.py',
'/home/ubuntu/INFO/MK_2021/Box_18077/PJaringan/praktikum4_pjaringan_18077.py',
'/home/ubuntu/INFO/MK_2021/Box_18081/PJARINGAN/PJAR_pratikum4_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18081/PJARINGAN/praktikum3_pjar_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18081/PJARINGAN/sc_pratikum3_pjar_18081-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18081/PJARINGAN/sc_pratikum4_pjar_18081-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum1_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum2_5_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum2_6_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum4_14_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum4_15_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum4_16_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktikum4_151_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18083/PGAME/praktkum4_161_pgame_18083.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum2_5_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum2_6_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_10_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_11_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_12_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_7_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_8_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum3_9_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/pratikum1_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum4_14_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum4_15_1_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum4_15_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum4_16_1_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PGame/praktikum4_16_pgame_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_praktikum2_client_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_praktikum2_server_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_praktikum3_sc_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_pratikum3_SC_18088.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_pratikum4_SC_18088.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/PJAR_pratikum4_SC_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/pratikum1_client_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18088/PJaringan/pratikum1_server_18088.py',
'/home/ubuntu/INFO/MK_2021/Box_18098/PGAME/praktikum1_pgame_18098.py',
'/home/ubuntu/INFO/MK_2021/Box_18098/PGAME/praktikum2_5_pgame_18098.py',
'/home/ubuntu/INFO/MK_2021/Box_18098/PGAME/praktikum2_6_pgame_18098.py',
'/home/ubuntu/INFO/MK_2021/Box_18098/PJARINGAN/pratikum1_client_18098.py',
'/home/ubuntu/INFO/MK_2021/Box_18098/PJARINGAN/pratikum1_server_18098.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/Pratikum1_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum2_5_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum2_6_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_10_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_11_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_12_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_7_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_8_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum3_9_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum4_14_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum4_15_1_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum4_15_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum4_16_1_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PGAME/praktikum4_16_pgame_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum1_client.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum1_server.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum2_client.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum2_server.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum3_sc_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum3_sc_18099_hasil.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum4_net_18099.py',
'/home/ubuntu/INFO/MK_2021/Box_18099/PJARINGAN/praktikum4_net_18099_hasil.PNG',
'/home/ubuntu/INFO/MK_2021/Box_18100/praktikum1_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18100/PGame/praktikum4_14_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18100/PGame/praktikum4_15_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18100/PGame/praktikum4_16_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18100/PGame/praktikum4_151_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18100/PGame/praktikum4_161_pgame_18100.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum1_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum2_5_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum2_6_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum4_14_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum4_15_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum4_16_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum4_151_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pgame/praktikum4_161_pgame_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum1_clent_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum1_server_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum2_client_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum2_server_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum3_pjar_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18109/Pjaringan/praktikum4_net_18109.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum1_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum2_5_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum2_6_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum4_14_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum4_15_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum4_16_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum4_151_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pgame/praktikum4_161_pgame_18110.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pjaringan/Praktikum1_18110_server.py',
'/home/ubuntu/INFO/MK_2021/Box_18110/Pjaringan/praktikum1_18110_client.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum2_5_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum2_6_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_10_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_11_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_12_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_7_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_8_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum3_9_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/pratikum1_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum4_14_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum4_15_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum4_16_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum4_151_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PGAME/praktikum4_161_pgame_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/Praktikum3_sc_18126_hasil.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum1_client_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum1_server_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum2_client_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum2_server_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum3_sc_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum4_net_18126.py',
'/home/ubuntu/INFO/MK_2021/Box_18126/PJARINGAN/praktikum4_net_18126_hasil.PNG',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum1_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum2_5_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum2_6_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_10_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_11_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_12_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_7_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_8_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum3_9_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum4_14_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum4_15_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum4_16_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum4_151_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PGAME/praktikum4_161_pgame_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PJARINGAN/praktikum1_client_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PJARINGAN/praktikum1_server_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PJARINGAN/praktikum2_client_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PJARINGAN/praktikum2_server_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18128/PJARINGAN/praktikum4_net_18128.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktik1_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum2_5_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum2_6_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_10_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_11_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_12_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_7_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_8_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum3_9_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum4_14_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum4_15_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum4_16_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum4_151_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PGAME/praktikum4_161_pgame_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PJARINGAN/praktikum1_client_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PJARINGAN/praktikum1_server_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PJARINGAN/praktikum2_client_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18129/PJARINGAN/praktikum2_server_18129.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum2_5_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum2_6_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_10_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_11_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_12_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_7_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_8_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum3_9_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/pratikum1_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum4_14_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum4_16_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum4_151_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PGAME/praktikum4_161_pgame_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/Praktikum3_sc_18130_hasil.PDF.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum1_client_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum1_server_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum2_client_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum2_server_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum3_sc_18130.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum4_net_18073.py',
'/home/ubuntu/INFO/MK_2021/Box_18130/PJARINGAN/praktikum4_net_18130.png',
'/home/ubuntu/INFO/MK_2021/Box_18134/PGAME/praktikum1_pgame_18134.py',
'/home/ubuntu/INFO/MK_2021/Box_18134/Pjaringan/praktikum1_client_18134.py',
'/home/ubuntu/INFO/MK_2021/Box_18134/Pjaringan/praktikum1_server_18134.py',
'/home/ubuntu/INFO/MK_2021/Box_18134/Pjaringan/praktikum2_client_18134.py',
'/home/ubuntu/INFO/MK_2021/Box_18134/Pjaringan/praktikum2_server_18134.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum1_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum2_5_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum2_6_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_10_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_11_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_12_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_7_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_8_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum3_9_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum4_14_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum4_15_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum4_16_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum4_151_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PGAME/praktikum4_161_pgame_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PJARINGAN/praktikum1_client_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PJARINGAN/praktikum1_server_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PJARINGAN/praktikum2_client_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18142/PJARINGAN/praktikum2_server_18142.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum2_5_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_10_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_11_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_12_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_7_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_8_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum3_9_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum4_14_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum4_15_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum4_16_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum4_151_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/PGame/praktikum4_161_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/Box/praktikum1_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18144/praktikum1_pgame_18144.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum1_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum2_5_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum2_6_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_10_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_11_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_12_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_7_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_8_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PGAME/praktikum3_9_pgame_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum1_client_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum1_server_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum2_client_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum2_server_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum3_pjar_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18147/PJARINGAN/praktikum4_net_18147.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/PGAME/praktikum4_14_pgame_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/PGAME/praktikum4_15_pgame_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/PGAME/praktikum4_16_pgame_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/PGAME/praktikum4_151_pgame_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/PGAME/praktikum4_161_pgame_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum1_client_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum1_server_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum2_client_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum2_server_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum3_pjar_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18148/Pjaringan/praktikum4_pjar_18148.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PGame/praktikum2_5_pgame_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PGame/praktikum2_6_pgame_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PGame/pratikum1_pgame_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/PJAR_praktikum2_client_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/PJAR_praktikum2_server_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/pratikum1_client_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/pratikum1_server_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/praktikum3_pjar_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/pratikum4_pjar_18155.py',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/sc_pratikum3_pjar_18155-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18155/PJaringan/sc_pratikum4_pjar_18155-dikonversi.pdf',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum1_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum2_5_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum2_6_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_10_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_11_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_12_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_7_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_8_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum3_9_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum4_14_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum4_15_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum4_16_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum4_151_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PGAME/praktikum4_161_pgame_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PJARIGAN/praktikum1_client_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PJARIGAN/praktikum1_server_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PJARIGAN/praktikum2_client_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18156/PJARIGAN/praktikum2_server_18156.py',
'/home/ubuntu/INFO/MK_2021/Box_18159/PJaringan/praktikum4_net_18159.py',
'/home/ubuntu/INFO/MK_2021/Box_18159/praktikum1_pgame_18159.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum1_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum4_14_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum4_15_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum4_16_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum4_151_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/PGAME/praktikum4_161_pgame_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum1_client_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum1_server_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum2_client_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum2_server_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum3_pjar_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18160/Pjaringan/praktikum4Pj_18160.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum2_5_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum2_6_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_10_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_11_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_12_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_7_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_8_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/praktikum3_9_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18162/PGAME/pratikum1_pgame_18162.py',
'/home/ubuntu/INFO/MK_2021/Box_18165/pratikum1_pgame_18165.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum1_client_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum1_server_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum2_client_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum2_server_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum3_pjar_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_20155/praktikum4_net_20155.py',
'/home/ubuntu/INFO/MK_2021/Box_18033/PGame/praktikum4_14_pgame_18033.py',
'/home/ubuntu/INFO/MK_2021/Box_18033/PGame/praktikum4_16_pgame_18033.py',
'/home/ubuntu/INFO/MK_2021/Box_18033/PGame/praktikum4_151_pgame_18033.py',
'/home/ubuntu/INFO/MK_2021/Box_18033/PGame/praktikum4_161_pgame_18033.py',
'/home/ubuntu/INFO/MK_2021/Box_18033/PGame/praktikum4_15_pgame_18033.py',
];



// *************************************************
// *************************************************






document.getElementById("npm-search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        get_data();
    	// document.getElementById("myFormID").submit();
		return false;
    }
});

function pesan(){
    var sq = document.getElementById("npm-search").value;
    alert("Hallo : " + fs[sq]);
}

function get_data(){
    var sq = document.getElementById("npm-search"); 
    var x=0;
    if (sq && sq.value) { 
        document.write("<br/><br/><h2> Daftar Files: "+sq.value+" </h2>");
        document.write("<table>");
        for (var i = 0; i < fs.length; i++){
            if (fs[i].includes(sq.value)){
                x= x+1;
                var fsdata=fs[i].replace('/home/ubuntu/INFO/MK_2021/','');
                document.write("<tr><td>"+x+"</td><td>"+fsdata+"</td></tr>");
            }
        }    
        document.write("</table>");
        document.write('<br/><br/><a href="thelist.html"> Back </a>');
        document.write("<hr />By:ikhwan@infoummu");
    }
    else{
        alert("Data "+sq.value+", NOT Found !");
    }
}



// var sq = document.getElementById("npm-search"); 
var xi=0;
for (var i = 0; i < fs.length; i++){
    // if (sq && sq.value) {        
    //     if (fs[i].includes(sq)){
    //         document.write("<tr><td>"+fs[i]+"</td></tr>");
    //     }
    // }else{

            xi= xi+1;
            var fsdata=fs[i].replace('/home/ubuntu/INFO/MK_2021/','');
            document.write("<tr><td>"+xi+"</td><td>"+fsdata+"</td></tr>");
            // document.write("<tr><td>"+fs[i]+"</td></tr>");
    // }
}
// document.write("");



</script>


</table>

<!-- ### end Table -->

<h3>
<a href="#top"> Balik ke Atas</a>
</h3>

***
By: ikhwan@infoummu


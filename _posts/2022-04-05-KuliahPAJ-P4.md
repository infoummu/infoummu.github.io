---
title: PAJ Pertemuan 04
published: true
---


## PERTEMUAN KEEMPAT 04 - Praktikkum 3 :

|Status   | : Online                 |
|Schedule | : Online                 |
|Waktu    | : 05/04/2022             |
|Tema     | : Get IP by Host Name    |


* Kerjakan Tugas Praktikum 3 Dibawah dan kumpul ke Folder `PAJ_NPM` di [Google Drive](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"} anda, Bagi yang belum memiliki folder `PJA_NPM` di `Google Drive` seilahkan baca langkah-langkah yang ada di  [Pertemuan Pertama ini](KuliahPAJ-P1.html#pertama){:target="_blank"}

* Pada Praktikum 3 ini membahas TEMA tentang code python untuk melihat IP dari sebuah HOST berdasarkan NAMA HOST yang kita INPUT, selanjutnya Hasil yang akan dikembalikan adalah IP dari nama host tersebut. 

* Silahkan Lalkukan Praktikum bersama Teman-Teman agar dapat menyelesaikan masalah bersama dan agar anda mudah paham materi praktikumnya.


## Pengganti Pertemuan ke 4

1. Tulis Code dibawah dengan Aplikasi Editor.
    * Pada code terdapat empat (4) NAMA HOST yaitu "localhost", "yahoo.com", "google.com", dan "ummu.ac.id", silahkan anda TAMBAHKAN lagi NAMA HOST/DOMAIN selain yang empat tersebut sehingga genap total menjadi sepuluh HOST/DOMAIN.

2. Simpan dengan Beri nama file dengan `praktikum3_gethostip_NPM.py` (ubah NPM dengan lima digit terakhir npm anda)

3. Contoh nama file : `praktikum3_gethostip_19001.py`

4. Jalankan di CMD/Terminal, perintahnya : python praktikum3_gethostip_19001.py

5. Jalankan dan Jika Tidak Ada Error, ambil/buat `ScreenShot` dari hasilnya dan beri nama `praktikum3_gethostip_19001.JPG` atau `praktikum3_gethostip_19001.PNG`.

6. Jadi total ada 2 (dua) file yang harus di-Upload/Kirim ke `GDrive`, yaitu:
    1. File Code : `praktikum3_gethostip_19001.py`
    2. File Screenshot : `praktikum3_gethostip_19001.PNG` atau `praktikum3_gethostip_19001.JPG`

7. Silahkan Upload/Kirim 2 (dua) file tersebut ke FOLDER `PAJ_NPM` anda masing-masing yang di [GDRIVE (Google Drive)](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"}.

8. Batas Waktu Kumpul sampai sebelum Pertemuan berikutnya masuk.

## The CODE 

* Code ini Berjalan di OS Linux maupun Windows

```python 
# Code ini Untuk LINUX dan Windows.
# Code/Script praktikum 3
# Tema : Get IP by Host Name 
# nama : ??
# npm  : 19???

import socket as soc

# TUGAS: 
# Tambahkan ENAM (6) HOST/DOMAIN agar lengkap menjadi SEPULUH (10)
HOSTS = ['localhost',
        'yahoo.com',
        'google.com',
        'ummu.ac.id']

for HOST in HOSTS:
    print(' Mencari IP Dari: ',HOST)
    IP_ADDR  = soc.gethostbyname(HOST)
    print(" IP: {:<17} -> {}".format(IP_ADDR, HOST))
    print("-"*35)

```

### Screenshot HASIL Code: 

* Berikut merupakan HASIL screenshot dari code diatas: 
![Install Python ](assets/reff/paj/praktikum3_gethostip_paj.png)



***
by: ikhwan@fedora.linux 

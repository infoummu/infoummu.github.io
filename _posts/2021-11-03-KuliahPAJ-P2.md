---
title: PAJ Pertemuan 02
published: true
---


## PERTEMUAN KEDUA 02 - Praktikkum 1 :

|Status   | : Online                   |
|Schedule | : Offline                  |
|Waktu    | : 22/03/2022               |
|Tema     | : Praktikum 1              |



## CLI (Command Line Interface) : 
- CLI di Windows: 
    - CMD
    - PS (power Shell)
- CLI di Linux 
    - Tilix/Terminal


# APLIKASI EDITOR :

- Contoh EDITOR  :
    - Sublime Text
    - Visual Studio/VSCodium (yg saya pakai)
    - Atom
    - Notepad++ / NotepadPP


## Pengganti Pertemuan ke 2

1. Tulis Code dibawah dengan Aplikasi Editor 
2. Simpan dengan Beri nama file dengan `praktikum1_ping_NPM.py` (ubah NPM dengan lima digit terakhir npm anda)
3. Contoh nama file : `praktikum1_ping_19001.py`
4. Jalankan di CLI, perintahnya : python praktikum1_ping_19020.py          

## CODE 
```python 
# Code/Script praktikum 1
# Tema : ping for test connection 
# nama : ??
# npm  : 19???

import os

HOST="127.0.0.1"
print("\n Ping to " + HOST)
print(" HASILnya:")
HASIL = os.system("ping -c 1 " + HOST + " &> /dev/null")

if HASIL == 0:
    print(" Terkoneksi ke " + HOST)
else:
    print(" TIDAK Terkoneksi ke " + HOST)

print("\n")


```



<!-- 
### Arahan Sebelum Praktikum :

- Setiap Mahasiswa diharapkan sudah memiliki akun `Dropbox`, yang akan digunakan sebagai tempat mengumpulkan tugas-tugas
- Silahkan Buat Folder `Box_NPM` (ubah NPM dengan NPM anda masing-masing; contoh : `Box_18001`) di `Dropbox`-nya masing-masin sebagai tempat untuk meng-Upload file hasil praktikumnya.
- Setelah folder `Box_NPM` nya sudah dibuat, silahkan sharing/berbagi folder `Box_NPM` nya dengan saya, ini alamat email saya : `ikhwan.elyas@gmail.com` (langkahnya sama seperti yang di pemrograman game)
- Setelah itu, silahkan lengkapi dengan buat dua (2) Folder masing-masing beri nama `PGame` dan `PJaringan` 
- Selanjutnya untuk setiap praktikum silahkan gunakan folder `PGame` untuk mengumpulkan/upload file hasil praktikum Pemrograman Game dan, gunakan Folder `PJaringan` untuk mengumpulkan/upload file hasil praktikum Pemrograman Jaringan. 


### File PDF Praktikum 1 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 1](assets/reff/pjar/Praktikum_PJar_1.pdf){:target="_blank"}


### Arahan Praktikum
1. Untuk Seluruh Mahasiswa agar segera download file praktikum 1 dan lakukan praktikum mandiri di komputernya masing-masing
2. Materi Praktikum 1 adalah pengenalan python socket, Untuk yang ingin mengenal lebih jauh tentang socket dapat melihat materi tambahan yang tersedia di tautan berikut : [Materi Tambahan Python](downloads.html){:target="_blank"}
3. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJar_NPM` (sesuaikan npm anda) pdada `Dropbox` nya masing2.
4. Sangat disarankan untuk Mahasiswa agar melakukan praktikum dalam kelompok belajar atau bersama teman2 agar mudah dan cepat memahami materi, dan bagi teman2 yang sudah paham sangat diharapkan dapat membimbing teman2 yang belum paham, dan bagi teman2 yang belum paham agar tidak segan untuk bertanya...

### Waktu Kumpul
- Diharapkan Kepada Mahasiswa agar sudah menyelesaikan praktikum 1 dan mengumpulkannya ke folder `PJar_NPM` di `dropbox` nya masing2 sebelum Pertemuan berikutnya.
 -->


***
by: Ikhwan 


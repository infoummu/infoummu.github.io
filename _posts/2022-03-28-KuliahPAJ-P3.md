---
title: PAJ Pertemuan 03
published: true
---


## PERTEMUAN KETIGA 03 - Praktikkum 2 :

|Status   | : Online                 |
|Schedule | : Online                 |
|Waktu    | : 28/03/2022             |
|Tema     | : Get Local IP and Interface Name           |


* Kerjakan Tugas Praktikum 2 Dibawah dan kumpul ke Folder `PAJ_NPM` di [Google Drive](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"} anda, Bagi yang belum memiliki folder `PJA_NPM` di `Google Drive` seilahkan baca langkah-langkah yang ada di  [Pertemuan Pertama ini](KuliahPAJ-P1.html#pertama){:target="_blank"}

* Praktikum 2 ini TEMA yang dibahas adalah tentang code python untuk melihat Informasi yang berhubungan dengan Perangkat jaringan yang ada pada local komputer kita, Informasi yang dapat dilihat seperti IP, Nama Interface, Mac Address dll.

* Silahkan Lalkukan Praktikum bersama Teman-Teman agar dapat menyelesaikan masalah bersama dan agar anda mudah paham materi praktikumnya.

## Install Python dan Module `scapy`

1. Sebelum Praktikum mandiri pastikan anda sudah siapkan aplikasi python dan modul yang dibutuhkan di laptop atau PC anda

2. Perhatikan LANGKAH-LANGKAH INSTALASI PYTHON dibawah agar python DIKENALI atau dapat BERJALAN di CMD pada laptop/PC anda.

### Install Python versi `3.7.4`

1. Download File python versi `3.7.4` di [Download - python-3.7.4-amd64.exe](downloads.html#master){:target="_blank"},

2. Setelah File Python Terdownload, cari file `python-3.7.4-amd64.exe` di Folder `Downloads` dan jalankan (Dobel klik/Klik dua kali) untuk dibuka/dijalankan.

3. Tampilan Install Python akan terlihat seperti gambar dibawah: 
![Install Python ](assets/reff/paj/python_install.png)


4. Setelah itu, PERTAMA silahkan BERI CENTANG pada CheckBox `Add Python 3.7 to PATH`, selanjutnya KLIK pada `Install Now`, selanjutnya tunggu sampai instalasi selesai.

5. Jika telah selesai Installasi, Sekarang Python harusnya sudah dapat diakses lewat CMD.

### Install Modul Python - `scapy`

3. Install modul python : scapy, untuk install modul anda harus terhubung dengan INTERNET, setelah itu buka CMD dan jalankan perintah berikut :
    1. `python -m pip install scapy` atau
    2. `pip install scapy`, tunggu sampai proses install selesai.

4. Jika modul telah selesai diinstall, anda bisa memeriksanya dengan perintah 
    1. `python -m pip list` atau 
    2. `pip list`, maka CMD akan menampilkan daftar modul yang telah ter-install di local komputer.



## Pengganti Pertemuan ke 3

1. Tulis Code dibawah dengan Aplikasi Editor.

2. Simpan dengan Beri nama file dengan `praktikum2_getip_NPM.py` (ubah NPM dengan lima digit terakhir npm anda)

3. Contoh nama file : `praktikum2_getip_19001.py`

4. Jalankan di CMD/Terminal, perintahnya : python praktikum2_getip_19001.py

5. Jalankan dan Jika Tidak Ada Error, ambil/buat `ScreenShot` dari hasilnya dan beri nama `praktikum2_getip_19001.JPG` atau `praktikum2_getip_19001.PNG`.

6. Jadi total ada 2 (dua) file yang harus di-Upload/Kirim ke `GDrive`, yaitu:
    1. File Code : `praktikum2_getip_19001.py`
    2. File Screenshot : `praktikum2_getip_19001.PNG` atau `praktikum2_getip_19001.JPG`

7. Silahkan Upload/Kirim 2 (dua) file tersebut ke FOLDER `PAJ_NPM` anda masing-masing yang di [GDRIVE (Google Drive)](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"}.

8. Batas Waktu Kumpul sampai sebelum Pertemuan berikutnya masuk.


## The CODE 

* Jika anda menggunakan Windows, CUKUP tulis/copy code dibawah yang khusus untuk Windows
* Jika ada yang menggunakan LINUX, CUKUP tulis/copy code dibawah yang khusus untuk LINUX 

### Code Untuk OS Windows

```python 
# Gunakan Code ini JIKA OS-nya Windows 
# Code/Script praktikum 2
# Tema : Get Local IP and Interface Name 
# nama : ??
# npm  : 19???

import scapy.all as sc


for l in sc.get_windows_if_list():
    try:
        print(" {:<20} : {}".format("Nama Interface",l["name"]))
        print(" {:<20} : {}".format("IP Address",l["ips"][1]))
        print(" {:<20} : {}".format("MAC Address",l["mac"]))
        print(" {:<20} : {}".format("Deskripsi",l["description"]))
        print("-"*35)
    except:
        pass


```

### Code Untuk OS LINUX

```python 
# Gunakan Code ini JIKA OS-nya LINUX
# Code/Script praktikum 2
# Tema : Get Local IP and Interface Name 
# nama : ??
# npm  : 19???

import scapy.all as sc


for IFL in sc.get_if_list():
    IP_ADDR  = sc.get_if_addr(IFL)
    MAC_ADDR = sc.get_if_hwaddr(IFL)
    print(" {:<20} : {}".format("Nama Interface",IFL))
    print(" {:<20} : {}".format("IP Address",IP_ADDR))
    print(" {:<20} : {}".format("MAC Address",MAC_ADDR))
    print("-"*35)

```

### Screenshot HASIL Code: 

* Berikut merupakan HASIL screenshot dari code diatas pada OS Windows ketika dijalankan di CMD: 
![Install Python ](assets/reff/paj/praktikum2_getip_NPM.png)


* Berikut merupakan HASIL screenshot dari code diatas pada OS LINUX  ketika dijalankan di Terminal:
![Install Python ](assets/reff/paj/praktikum2_getip_linux.png)


***
by: ikhwan@fedora.linux 


---
title: Kuliah Pemrograman Jaringan P5
published: true
---

## PERTEMUAN KeLIMA 05 - Praktikum 4 :

|Status   | : Offline                   |
|Schedule | : Offline                  |
|Waktu    | : 22/11/2020               |
|Tema     | : Praktikum 4              |

### File PDF Praktikum 4 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 4](assets/reff/pjar/Praktikum_PJar_4.pdf){:target="_blank"}

2. Download `netifaces` [Download netifaces](assets/reff/pjar/netifaces-0.11.0-cp37-cp37m-win_amd64.whl){:target="_blank"}

### Arahan Untuk Praktikum 4 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari sebelum Pertemuan akan datang (pertemuan ke-6).

### File Script

    
```python

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 4 PJaringan
# * Get Network Interface Name
# * Get IP From Network Interface
# ----------------------------
import socket, os
import netifaces as netfe   # Import modul sekaligus membuat Alias 

# Fungsi Untuk Mendapatkan Nama Host dan IP
def get_hostinfo():
    nama_host = socket.gethostname()
    ip = socket.gethostbyname(nama_host)
    print ("{:<12}:{}".format(" Nama Host",nama_host))
    print ("{:<12}:{}".format(" IP", ip))

# Fungsi untuk Mengembalikan IP dari INTERFACE
def get_ip(INTERFACE):
    THE_IP = netfe.ifaddresses(INTERFACE)[netfe.AF_INET][0]['addr']
    return THE_IP

# Fungsi Untuk Mendapatkan Daftar Nama2 Network Interface
def get_ifacename():
    for ifn in netfe.interfaces():
        print(" Net Interface: {}".format(ifn))

# Fungsi Untuk Menampilkan IP dari Interface
def get_ip_from_ifacename():
    for ifn in netfe.interfaces():
        try:
            print(" Net Interface: {:<12} IP: {}".format(ifn,get_ip(ifn)))
        except Exception as er:
            print(" Net Interface: {:<12} IP: [ {} Error ]".format(ifn,er))
            continue

# Fungsi Dibawah Hanya Untuk Mesin Linux
# Fungsi Untuk Mendapatkan Daftar Nama2 Network Interface
def get_ifacename_linux():
    for ifn in os.listdir('/sys/class/net/'):
        print(' Net Interface: {:<12} [Linux]'.format(ifn))

#--------------------------------------------
# MEMANGGIL FUNGSI-2 YANG SUDAH DIBUAT DIATAS
#--------------------------------------------

get_hostinfo()      # Cetak Nama Host dan IP
print('-'*35)       # Cetak Garis Pembatas

get_ifacename()     # Cetak Nama2 Interface
print('-'*35)       # Cetak Garis Pembatas

get_ip_from_ifacename() # Cetak Nama2 Interface dan IP
print('-'*35)           # Cetak Garis Pembatas

get_ifacename_linux()   # Cetak Nama2 Interface Versi Linux
print('-'*35)           # Cetak Garis Pembatas


    
```
`
 
***
By: Ikhwan.

---
title: Kuliah Pemrograman Jaringan P10
published: true
---


## PERTEMUAN KeSEPULUH 10 :

|Status   | : Online                       |
|Schedule | : Online                       |
|Waktu    | : 27/12/2021                   |
|Tema     | : Praktikum 09 FTP  Dir/List Files   |


### File PDF Praktikum 09 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 09](assets/reff/pjar/Praktikum_PJar_9.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum 10 adalah tentang FTP, FTP (File Transfer Protocol) adalah salah satu protokol tertua yang pernah ada di Internet. Protokol FTP dikembangkan oleh Abhay Bhushan (alumni IIT dan MIT) pada tahun 1970-an, ketika bekerja pada proyek ARPAnet.,... 


### Arahan Untuk Praktikum 09 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2 sebelum Pertemuan berikutnya.

### Script yang ada di modul 
Silahkan copy-paste script dibawah dan beri nama script tersebut dengan `praktikum09_ftp_npm.py` : 


```python

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 09 PJaringan
# * Koneksi ke  Mikrotik Lewat ftp
# * List Direktori dan File Mikrotik Lewat ftp
# ----------------------------
from ftplib import FTP as F

ip_ftp_target='192.168.43.160'
ftp_user='admin'
ftp_pasw='1234'

myftp = F(ip_ftp_target)
myftp.login(ftp_user,ftp_pasw)

print(' {:<15}: {}'.format('IP FTP TARGET',ip_ftp_target))
print(' {:<15}: {}'.format('FTP USER',ftp_user))

# Output Versi Origin
print('*'*35)   # Garis Batas
myftp.dir()

# Mengontrol Output Versi 1
print('*'*35)   # Garis Batas
dir_list1 = []
myftp.dir(dir_list1.append)
for dr in dir_list1:
    print(' Dirs_1 : ',dr)

# Mengontrol Output Versi 2
# Nama Direktori dan File saja
print('*'*35)   # Garis Batas
dir_list2 = []
dir_list2  = myftp.nlst()
for dirs in dir_list2:
    print(' Dirs_2 : ',dirs)

print('*'*35)   # Garis Batas


```

***
By:ikhwan@fedora-linux


---
title: Kuliah Pemrograman Jaringan P10
published: true
---


## PERTEMUAN KeSEBELAS 11 :

|Status   | : Offline                       |
|Schedule | : Offline                       |
|Waktu    | : 17/01/2022                    |
|Tema     | : Praktikum 10 FTP  up/down     |


### File PDF Praktikum 10 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 10](assets/reff/pjar/Praktikum_PJar_10.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum 10 adalah tentang FTP, FTP (File Transfer Protocol) adalah salah satu protokol tertua yang pernah ada di Internet. Protokol FTP dikembangkan oleh Abhay Bhushan (alumni IIT dan MIT) pada tahun 1970-an, ketika bekerja pada proyek ARPAnet.,... 


### Arahan Untuk Praktikum 10 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2 sebelum Pertemuan berikutnya.

### Script yang ada di modul 
Silahkan copy-paste script dibawah dan beri nama script tersebut dengan `praktikum10_ftp_down_npm.py` : 


```python

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 10 PJaringan
# * Koneksi ke  ftp server
# * List Direktori dan File di ftp server
# * Download File dari ftp server
# ----------------------------

from ftplib import FTP as F
import os

# Sesuaikan IP dengan IP FTP Server
ip_target='192.168.43.160'
user='admin'
pasw='1234'

myftp = F(ip_target)
myftp.login(user,pasw)

print('IP TARGET : ',ip_target)
print('USER      : ',user)
print('*'*35)   # Garis Batas

## Fungsi Untuk Download File Teks
def ambil_file_teks(nama_file):
    try:
        def w2f(nama_file):
            fl.write(nama_file)
            fl.write(os.linesep)

        nama_file_txt= "Text_" + nama_file
        fl=open(nama_file_txt,'w')
        myftp.retrlines('RETR ' + nama_file, w2f)
        fl.close()
        print("Sukses Download File ! (Text)")
    except:
        print("Error, Gagal Download File !")

## Fungsi Untuk Download File Binary
def ambil_file_bin(nama_file):
    try:
        fl=open(nama_file,'wb')
        myftp.retrbinary('RETR ' + nama_file, fl.write)
        fl.close()
        print("Sukses Download File ! (Binary)")
    except:
        print("Error, Gagal Download File !")


## PRINTOUT / CETAK KE LAYAR
myftp.dir()
print('*'*35)   # Garis Batas

## NAMA FILE from IPUT
## Pilih/Input Nama File
flx = input("Masukkan Nama File : ").strip()

# ambil_file_teks(flx)

# harus beri Jeda antara "ambil_file_teks" 
# dan "ambil_file_bin", jika tidak error 

ambil_file_bin(flx)

#akhir_code


```

#### TAMBAHAN FUNGSI UPLOAD : 

1. Fungsi Tambahan untuk code diatas yaitu UPLOAD FILE,
2. Jika code ftp DOWNLOAD diatas sudah berjalan dan berhasil, 
3. Silahkan Modifikasi code diatas dan tambahkan code dibawah ke dalam file dan coba jalankan kembali

```python
## Untuk UPLOAD File
def upload_file(nama_file):
    try:
        the_file=open(nama_file,'rb')
        myftp.storbinary('STOR %s' % nama_file,  the_file)
        the_file.close()
        print("Sukses UPLOAD File : %s !\n" % nama_file)
    except Exception as E:
        print("Gagal UPLOAD File %s !\nError : %s" % (nama_file,E))



```

***
By:ikhwan@fedora-linux


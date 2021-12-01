
---
title: Kuliah Pemrograman Jaringan P5
published: true
---

## PERTEMUAN KeEnam 06 - Praktikum 5 :

|Status  | : Offline                   |
|Schedule | : Offline                   |
|Waktu   | : 29/11/2021              |
|Tema    | : Praktikum 5             |

### File PDF Praktikum 5 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 5](assets/reff/pjar/Praktikum_PJar_5.pdf){:target="_blank"}

### Materi Praktikum

Telnet, Telnet merupakan perintah yang digunakan untuk komunikasi interaktife dengan host lainnya menggunakan protokol TELNET. Lebih lanjut silahkan baca di modul...


### Arahan Untuk Praktikum 5 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling  pertemuan akan datang


### File Script : 


```python


# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 5 PJaringan
# * Login ke Mikrotik Lewat Telnet
# * Kirim Perintah ke Mikrotik Lewat Telnet
# ----------------------------

import telnetlib, time

# SESUAIKAN IP,user dan password DENGAN PERANGKAT Mikrotik anda
IP='192.168.2.1' # IP Mikrotik
user= 'admin'
password= '1234'

# Jika Telah berhasil dengan perintah ini 'ip address print'
# Silahkan ubah dengan perintah lainnya untuk latihan tambahan anda...
perintah='ip address print'
keluar='quit'

tnet = telnetlib.Telnet(IP)

tnet.read_until(b"Login: ")
tnet.write(user.encode('UTF-8') + b"\n")

tnet.read_until(b"Password: ")
tnet.write(password.encode('UTF-8') + b"\n")

tnet.read_until(b'>')
tnet.write(perintah.encode('UTF-8') + b"\r\n")
Time.sleep(2)
tnet.read_until(b'>')
tnet.write(keluar.encode('UTF-8') + b"\r\n")

print(tnet.read_all().decode())
tnet.close()




```





***
By: ikhwan@fedora
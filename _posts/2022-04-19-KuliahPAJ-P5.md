---
title: PAJ Pertemuan 05
published: true
---


## PERTEMUAN KELIMA 05 - Praktikkum 4 :

|Status   | : Offline                 |
|Schedule | : Offline                 |
|Waktu    | : 19/04/2022             |
|Tema     | : telnet     |


* Kerjakan Praktikum 4 Dibawah di LAB dan kumpul ke Folder `PAJ_NPM` di [Google Drive](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"} anda, Bagi yang belum memiliki folder `PJA_NPM` di `Google Drive` seilahkan baca langkah-langkah yang ada di  [Pertemuan Pertama ini](KuliahPAJ-P1.html#pertama){:target="_blank"}

* Pada Praktikum 4 ini membahas TEMA tentang code python untuk melakukan telnet, telnet biasa digunakan untuk melakukan remote pada sebuah sistem, lakukan praktikum telnet manual sebelum mencobanya dengan code python anda, jika telnet manual dapat berjalan selanjutnya silahkan lakukan dengan menggunakan code python anda.



## Pengganti Pertemuan ke 4

1. Tulis Code dibawah dengan Aplikasi Editor.
 

2. Simpan dengan Beri nama file dengan `praktikum4_gethostip_NPM.py` (ubah NPM dengan lima digit terakhir npm anda)

3. Contoh nama file : `praktikum4_telnet_19001.py`

4. Jalankan di CMD/Terminal, perintahnya : python praktikum4_telnet_19001.py

5. Jalankan dan Jika Tidak Ada Error, ambil/buat `ScreenShot` dari hasilnya dan beri nama `praktikum4_telnet_19001.JPG` atau `praktikum4_telnet_19001.PNG`.


7. Silahkan Upload/Kirim file praktikum tersebut ke FOLDER `PAJ_NPM` anda masing-masing yang di [GDRIVE (Google Drive)](https://drive.google.com/drive/folders/1mEOIndRBI0v4wH9DeyMRMF8obfIMvB5R?usp=sharing){:target="_blank"}.

8. Batas Waktu Kumpul sampai sebelum Pertemuan berikutnya masuk.

## The CODE 

* Code ini Berjalan di OS Linux maupun Windows ???

```python 
# Code ini Untuk LINUX dan Windows.
# Code/Script praktikum 4
# Tema : telnet 
# nama : ??
# npm  : 19???


import telnetlib, time

# SESUAIKAN IP,user dan password DENGAN PERANGKAT Mikrotik anda
IP='192.168.2.1'    # IP Mikrotik
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
time.sleep(2)

tnet.read_until(b'>')
tnet.write(keluar.encode('UTF-8') + b"\r\n")

print(tnet.read_all().decode())
tnet.close()


********************

# Versi Multi Dev
import telnetlib,time
#config_user_password_port_etc.
HOST=['192.168.2.1','192.168.1.22']


def exec_cmd(cmd,IP,keluar='quit'):
    PORT='23'
    user= 'admin'
    password= 'isa'
    tn = telnetlib.Telnet(IP,PORT)
    tn = telnetlib.Telnet(IP)
    #input user
    tn.read_until(b"Login: ")
    tn.write(user.encode('UTF-8') + b"\n")
    #input password
    tn.read_until(b"Password: ")
    tn.write(password.encode('UTF-8') + b"\r\n")

    tn.read_until(b'>')
    tn.write(cmd.encode() + b"\r\n")
    time.sleep(2)
    tn.read_until(b'>')
    tn.write(keluar.encode() + b"\r\n")
    print(tn.read_all().decode())
    tn.close()


IP1=HOST[0]
IP2=HOST[1]
cmd="\r\nip address print"

print("IP 1 : {}".format(IP1))
print("IP 2 : {}".format(IP2))

print('-'*35)
print("Try to {}".format(IP1))
exec_cmd(cmd,IP1)

print('-'*35)

print("Try to {}".format(IP2))
exec_cmd(cmd,IP2)

print('-'*35)

```


***
by: ikhwan@fedora.linux 

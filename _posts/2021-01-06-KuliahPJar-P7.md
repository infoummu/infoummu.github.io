---
title: Kuliah Pemrograman Jaringan P7
published: true
---

## PERTEMUAN KeEnam 07 - Praktikum 6 :

|Status  | : Offline                   |
|Schedule | : Offline                   |
|Waktu   | : 06/01/2021              |
|Tema    | : Praktikum 6             |


### INFO `UTS`

<b> DIINFORMASIKAN KEPADA SEMUA MAHASISWA, INSYA-ALLAH MINGGU DEPAN (Senin 13/01/2021) `UTS UNTUK PJaringan` </b>


### File PDF Praktikum 6 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 6](assets/reff/pjar/Praktikum_PJar_6.pdf){:target="_blank"}

### Materi Praktikum

Telnet, SSH adalah protokol jaringan yang memungkinkan pertukaran data melalui jalur aman antara dua perangkat jaringan. Silahkan lanjutkan praktikum mengikuti arahan yang ada di file pdf yang didownload...


### Arahan Untuk Praktikum 6 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat sebelum masuk praktikum akan datang

### Code Script dalam modul : 

### Script SSH : praktikum6_pjar_ssh_NPM.py 

```python
# --------------------------------------
# Informatika UMMU Ternate
# Script Praktikum 6 PJaringan
# * Koneksi ke Mikrotik Lewat ssh
# * Kirim Perintah ke Mikrotik Lewat ssh
# --------------------------------------
import paramiko,time

nbytes = 4096

IP = '192.168.2.1'    # MikroTik IP

port = 3333
user = 'pjar'              # MikroTik Login User
password = '1234'    # MikroTik Login Pass

<<<<<<< HEAD
perintah = 'ls -l'        # for linux
=======
perintah = 'interface print'        # for MikroTik
>>>>>>> 6a97a42361dea37e01d49ed52c3a3420cf4f902e

ssh_user = paramiko.Transport((IP, port))
ssh_user.connect(username=user, password=password)

output_data = []
error_data  = []
session = ssh_user.open_channel(kind='session')
session.exec_command(perintah)

while True:
    if session.recv_ready():
        output_data.append(session.recv(nbytes))
    if session.recv_stderr_ready():
        error_data.append(session.recv_stderr(nbytes))
    if session.exit_status_ready():
        break

print ('exit status: ', session.recv_exit_status())
time.sleep(1)
print (b''.join(output_data).decode())
print (b''.join(error_data).decode())

session.close()
ssh_user.close()

```


<!-- 
***

## netifaces to scapy [praktikum 4]

Materi ini atau script dibawah cukup lakukan praktikum untuk tambahan saja dan tidak harus dikumpuk/upload ke dropbox,
tapi yang mau upload boleh dan akan dipertimbangkan sebagai nilai tambahan...



Pada Materi Praktikum 4 Untuk teman2 yang menggunakan Windows dan gagal install `netifaces` pada praktikum 4
bisa mencoba modul lain yaitu `scapy`,
#### Install `scapy`
    - pip3 install scapy
    - atau : pip3 install --user scapy

#### The Script :

```py

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 4 PJaringan
# * Get Network Interface Name
# * Get IP From Network Interface
# * Simpan : praktikum4_net-win_npm.py
# ----------------------------
import scapy.all as sc

print("")
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

#### Hasil Screenshot :

Hasil dari Script diatas saat dijalankan pada mesin Windows 10 dalam tangkapan layar (screenshot) :

![Screenshot Get Interface](assets/reff/pjar/sc_get_net_iface.png)
 -->

***

By: ikhwan@fedora-linux

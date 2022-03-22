---
title: Kuliah Pemrograman Jaringan P9
published: true
---

## PERTEMUAN KeSEMBILAN 09 :

|Status   | : Online                        |
|Schedule | : Online                        |
|Waktu    | : 20/12/2020                    |
|Tema     | : Praktikum 8 SSH Multi Device  |


### File PDF Praktikum 8 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 8](assets/reff/pjar/Praktikum_PJar_8.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum masih seputar SSH, tapi pada praktikum kali ini kita coba dengan beberapa device dan dengan beberapa perintah sekaligus yang dieksekuli lewat script yang kita buat...


### Arahan Untuk Praktikum 8 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum yang dikerjakan di LAB (Offline) Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat sebelum Praktikum berikutnya !.

### Script yang ada di modul 
Silahkan copy-paste script dibawah dan beri nama script tersebut dengan `praktikum8_ssh_mh_npm.py` : 

```python

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 8 PJaringan
# * Koneksi ke Multi host Lewat ssh
# * Kirim Multi Perintah ke host Lewat ssh
# ----------------------------
import paramiko, time

nbytes = 4096
port = 22
username = 'admin'
password = '1234'

# untuk mesin linux
commands = ['ip addr show',
            'ls -l /tmp',
            'uname -somnr']
# target ip 
ips=["192.168.43.160",
    "192.168.43.228"]


for hostname in ips:
    print('SSH TO : {}'.format(hostname))
    for command in commands :
        print('PERINTAH : {}'.format(command))

        client = paramiko.Transport((hostname, port))
        client.connect(username=username, password=password)

        stdout_data = []
        stderr_data = []
        session = client.open_channel(kind='session')

        session.exec_command(command)
        while True:
            if session.recv_ready():
                stdout_data.append(session.recv(nbytes))
            if session.recv_stderr_ready():
                stderr_data.append(session.recv_stderr(nbytes))
            if session.exit_status_ready():
                break

        time.sleep(1)
        # print ('exit status: ', session.recv_exit_status())
        if session.recv_exit_status() == 0:
            print ('exit status: Suksess') 
        else:
            print ('exit status: FAIL')
        
        print("-"*35)   # Garis Batas
        print (b''.join(stdout_data).decode())
        #print (b''.join(stderr_data).decode())

        session.close()
        client.close()
        print("-"*35)   # Garis Batas
    print("*"*35)   # Garis Batas


```



***
By:ikhwan@linux-fedora
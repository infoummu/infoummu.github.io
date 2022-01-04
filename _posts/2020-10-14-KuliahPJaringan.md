---
title: Kuliah Pemrograman Jaringan
published: true
---

### Informasi Kuliah Pemrograman Jaringan Tiap Pertemuan, buka link dibawah : 

1. [Pertemuan Pertama PJar (1)](KuliahPJar-P1.html){:target="_blank"} - [27/10/2021] - Offline
2. [Pertemuan Kedua PJar (2)](KuliahPJar-P2.html){:target="_blank"} - [03/11/2021] - Online
3. [Pertemuan Ketiga PJar (3)](KuliahPJar-P3.html){:target="_blank"} - [10/11/2021] - Offline
4. [Pertemuan Keempat PJar (4)](KuliahPJar-P4.html){:target="_blank"} - [15/11/2021] - Offline
5. [Pertemuan Kelima PJar (5)](KuliahPJar-P5.html){:target="_blank"} - [22/11/2021] - Offline
6. [Pertemuan Keenam PJar (6)](KuliahPJar-P6.html){:target="_blank"} - [29/11/2021] - Offline
7. [Pertemuan Ketujuh PJar (7)](KuliahPJar-P7.html){:target="_blank"} - [06/12/2021] - Offline
8. [Pertemuan KeDelapan PJar (8) - UTS](KuliahPJar-P8.html){:target="_blank"} - [13/12/2021] - Online
9. [Pertemuan KeSembilan PJar (9)](KuliahPJar-P9.html){:target="_blank"} - [20/12/2021] - Online
10. [Pertemuan KeSepuluh PJar (10)](KuliahPJar-P10.html){:target="_blank"} - [27/12/2021] - Online


### Arahan Sebelum Praktikum Bagi yang belum punya Folder `Box_NPM` :

- Setiap Mahasiswa diharapkan sudah memiliki akun `Dropbox`, yang akan digunakan sebagai tempat mengumpulkan tugas-tugas
- Silahkan Buat Folder `Box_NPM` (ubah NPM dengan NPM anda masing-masing; contoh : `Box_18001`) di `Dropbox`-nya masing-masin sebagai tempat untuk meng-Upload file hasil praktikumnya.
- Setelah folder `Box_NPM` nya sudah dibuat, silahkan sharing/berbagi folder `Box_NPM` nya dengan saya, ini alamat email saya : `ikhwan.elyas@gmail.com` (langkahnya sama seperti yang didemokan saata di kuliah pemrograman game)
- Setelah itu, silahkan lengkapi dengan buat dua (2) Folder masing-masing beri nama `PGame` dan `PJaringan` 
- Selanjutnya untuk setiap praktikum silahkan gunakan folder `PGame` untuk mengumpulkan/upload file hasil praktikum Pemrograman Game dan, gunakan Folder `PJaringan` untuk mengumpulkan/upload file hasil praktikum Pemrograman Jaringan. 


<!--
## PERTEMUAN KeENAMBELAS 16 - UAS  :

|Status   | : Offline                      |
|Schedule | : Offline                      |
|Waktu    | : 16/01/2021                   |
|Tema     | : UAS Pemograman Jaringan      |

### Soal UAS 
Soal UAS PJaringan : 
1. Lakukan koneksi ke SSID  Mikrotik berikut :

    1. Nama SSID : `UAS_PJaringan`
    2. Pass SSID : `12345678f`

2. Kebutuhan Koneksikan Script anda :  

    - IP        : `192.168.2.1`
    - User      : `admin`
    - Password  : `1234`
3. Yang Kerjakan ONLINE silahkan Mikrotik-nya diganti dengan situs `https://dlptest.com/ftp-test/`, silahkan sesuaikan IP, user, dan Password dengan yang terdapat di situs tersebut.

4. Buat Sebuah Script yang dapat melakukan... :
    1. Melihat/list file yang ada di mikrotik/online-ftp-server , 
    2. Download File yang terdapat NPM anda pada nama filenya dari Mikrotik/online-ftp-server,
    3. Lengkapi Biodata sesuai arahan dalam file dan sertakan script anda kedalam file di bagian akhir file.
    4. Kirim/Upload Kembali ke mikrotik file yg sudah anda ubah 

Jadi Script yang anda buat nantinya digunakan untuk `Melihat File di Mikrotik`, `Download File di Mikrotik yang Terdapat NPM anda` serta `upload kembali file yang di download` setelah dilengkapi isinya tanpa mengubah nama filenya. 
    

***
***


## PERTEMUAN KeLIMABELAS 15 :

|Status   | : Offline                      |
|Schedule | : Offline                      |
|Waktu    | : 15/01/2021                   |
|Tema     | : Praktikum 14 FTP UPLOAD File ONLINE|




### Materi Praktikum

Materi Praktikum 14 adalah tentang Bagaimana Meng-UPLOAD file melalui FTP ke FTP-SERVER secara ONLINE.... 

1. Siapkan sebuah file latihan yang berisi biodata anda
2. Beri nama filenya dengan `biodata_npm.txt`, contoh `biodata_17001.txt`
3. Isi file tersebut dengan : 

```js
# ----------------------------
# Informatika UMMU Ternate
# File Pendukung Praktikum 14 PJaringan
# File Biodata unuk NPM
# * Koneksi ke Mesin lain Lewat ftp
# * UPLOAD File ke Mesin lain Lewat ftp
# ----------------------------

Nama            : Nama Anda
NPM             : Nomo NPM (5 digit terakhir saja)
MK              : Nama Matakuliah
Pertemuan Ke    : 14
Tanggal         : 15 Januari 2021

```

4. Kemudian Simpan ke dalam folder tempat anda menyimpan Script Python praktikum 13,
5. Setelah itu Jalankan script dibawah, perhatikan Pesan yang muncul di layar !.

### Script Praktikum 14

Tulis atua copy code pada Praktikum 13 dan ubah bagian headernya dan jalankan di mesin anda, 

```py

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 14 PJaringan
# * Koneksi ke  FTP Server Online
# * UPLOAD File ke FTP Server Online
# ----------------------------

from ftplib import FTP as F

#ip_target='192.168.2.1'
ip_target='localhost'
user='pjar'
pasw='1234'

# IP, user dan pasw DIUBAH MENJADI 
# Buka Situs https://dlptest.com/ftp-test/
# Kemudian Check user dan pass yang tertera di sana
ip_target='ftp.dlptest.com'
user='dlpuser'
pasw='rNrKYTX9g7z3RgJRmxWuGHbeu' 

ldir = 'dir/to/lokasi/file'
myftp = F(ip_target)
myftp.login(user,pasw)
#myftp.login() # test for anonymouse

print('IP TARGET : ',ip_target)
print('USER      : ',user)
print('*'*35 + '\n')   # Garis Batas

## Untuk UPLOAD File 
def upload_file(nama_file):  
    the_file=open(nama_file,'rb')
    myftp.storbinary('STOR %s' % nama_file,  the_file)
    the_file.close()        
    print("Sukses UPLOAD File : %s !\n" % nama_file)



## PRINTOUT Informasi KE LAYAR
# change Work Dir in Server
#myftp.cwd(ldir) 

# fup: adalah variabel File yang akan diUpload
fup  = 'biodata_17000.txt'

upload_file(fup)

#print('*'*35)   # Garis Batas
#myftp.dir()

print('*'*35)   # Garis Batas

df=[]
df=myftp.nlst();
for ffl in df:
    if 'biodata' in ffl:
        print(' The File : ',ffl)


print('*'*35)   # Garis Batas

#print('Dir : ',myftp.pwd())
#akhir_code

```

### Arahan Untuk Praktikum 13 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat sebelum final/UAS


***
***


## PERTEMUAN KeEMPATBELAS 14 :

|Status   | : Offline                      |
|Schedule | : Offline                      |
|Waktu    | : 08/01/2021                   |
|Tema     | : Praktikum 13 FTP UPLOAD File |




### Materi Praktikum

Materi Praktikum 13 adalah tentang Bagaimana Meng-UPLOAD file melalui FTP ke mesin linux di jaringan local.... 

1. Siapkan sebuah file latihan yang berisi biodata anda
2. Beri nama filenya dengan `biodata_npm.txt`, contoh `biodata_17001.txt`
3. Isi file tersebut dengan : 

```js
# ----------------------------
# Informatika UMMU Ternate
# File Pendukung Praktikum 13 PJaringan
# File Biodata unuk NPM
# * Koneksi ke Mesin lain Lewat ftp
# * UPLOAD File ke Mesin lain Lewat ftp
# ----------------------------

Nama            : Nama Anda
NPM             : Nomo NPM (5 digit terakhir saja)
MK              : Nama Matakuliah
Pertemuan Ke    : 14

```

4. Kemudian Simpan ke dalam folder tempat anda menyimpan Script Python praktikum 13,
5. Setelah itu Jalankan script dibawah, perhatikan Pesan yang muncul di layar !.

### Script Praktikum 13

Tulis atua copy code berikut dan jalankan di mesin anda, jangan lupa untuk mengubah beberapa variabel untuk disesuaikan dengna konfigurasi jaringan anda...

```py

# ----------------------------
# Informatika UMMU Ternate
# Script Praktikum 13 PJaringan
# * Koneksi ke Mesin lain Lewat ftp
# * UPLOAD File ke Mesin lain Lewat ftp
# ----------------------------

from ftplib import FTP as F

#ip_target='192.168.2.1'
ip_target='localhost'
user='pjar'
pasw='1234'

myftp = F(ip_target)
myftp.login(user,pasw)


print('IP TARGET : ',ip_target)
print('USER      : ',user)
print('*'*35 + '\n')   # Garis Batas

## Untuk UPLOAD File 
def upload_file(nama_file):  
    try:
        the_file=open(nama_file,'rb')
        myftp.storbinary('STOR %s' % nama_file,  the_file)
        the_file.close()        
        print("Sukses UPLOAD File : %s !\n" % nama_file)
    except Exception as ER: 
        print("Error UP, Gagal UPLOAD File %s !\n" % nama_file)


# PRINTOUT Informasi KE LAYAR
try:
    # fup: adalah variabel File yang akan diUpload
    fup= 'biodata_npm.txt'
    upload_file(fup)
except Exception as ER:
    print("Error : ",ER)

print('*'*35)   # Garis Batas

myftp.dir()

    
#akhir_code



```

### Arahan Untuk Praktikum 13 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat sebelum final/UAS


***
***


## PERTEMUAN KeTIGABELAS 13 :

|Status   | : Online                       |
|Schedule | : Offline                      |
|Waktu    | : 04/01/2021                   |
|Tema     | : Praktikum 12 FTP UPLOAD File |


### File PDF Praktikum 12 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 12](assets/reff/pjar/Praktikum_PJar_12.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum 12 adalah tentang Bagaimana Meng-UPLOAD file melalui FTP,,... 


### Arahan Untuk Praktikum 12 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat sebelum final/UAS


***
***





## PERTEMUAN KeDUABELAS 12 :

|Status   | : Online                       |
|Schedule | : Offline                      |
|Waktu    | : 25/12/2020                   |
|Tema     | : Praktikum 11 FTP Download File   |


### File PDF Praktikum 11 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 11](assets/reff/pjar/Praktikum_PJar_11.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum 11 adalah tentang Bagaimana MenDownload file melalui FTP,,... 


### Arahan Untuk Praktikum 11 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Sabtu 02/01/2021`


***
***





## PERTEMUAN KeSEPULUH 10 :

|Status   | : Offline                       |
|Schedule | : Offline                       |
|Waktu    | : 11/12/2020                    |
|Tema     | : Praktikum 9 SSH Multi Device  |


### File PDF Praktikum 9 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 9](assets/reff/pjar/Praktikum_PJar_9.pdf){:target="_blank"}

### Materi Praktikum

Materi Praktikum masih seputar SSH, tapi pada praktikum kali ini kita coba dengan beberapa device dan dengan beberapa perintah sekaligus yang dieksekuli lewat script yang kita buat...


### Arahan Untuk Praktikum 9 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum yang dikerjakan di LAB (Offline) Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Sabtu 12/12/2020`


***
***



## PERTEMUAN KeDELAPAN 08 :

|Status   | : Offline                  |
|Schedule | : Offline                  |
|Waktu    | : 04/12/2020               |
|Tema     | : Praktikum 7              |


### File PDF Praktikum 7 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 7](assets/reff/pjar/Praktikum_PJar_7.pdf){:target="_blank"}

### Materi Praktikum

Telnet, SSH adalah protokol jaringan yang memungkinkan pertukaran data melalui jalur aman antara dua perangkat jaringan. Silahkan lanjutkan praktikum mengikuti arahan yang ada di file pdf yang didownload...


### Arahan Untuk Praktikum 7 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum yang dikerjakan di LAB (Offline) Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 04/12/2020`


***
***






## PERTEMUAN KeENAM 06 :

|Status  | : Online                   |
|Schedule | : Online                   |
|Waktu   | : 21/11/2020               |
|Tema    | : Praktikum 5              |

### File PDF Praktikum 5 :

Silahkan download file praktikumnya, harap dibaca dan lakukan praktikum sesuai arahan yang ada di file yang anda download, berikut tautannya: [Download File Praktikum 5](assets/reff/pjar/Praktikum_PJar_5.pdf){:target="_blank"}

### Materi Praktikum

Telnet, Telnet merupakan perintah yang digunakan untuk komunikasi interaktife dengan host lainnya menggunakan protokol TELNET. Lebih lanjut silahkan baca di modul...


### Arahan Untuk Praktikum 5 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Sabtu 28/11/2020`


***
***


## PERTEMUAN KeLIMA 05 :

|Status   | : Online                   |
|Schedule | : Offline                  |
|Waktu    | : 13/11/2020               |
|Tema     | : Praktikum 4              |

### File PDF Praktikum 4 :
1. Silahkan ambil/download file praktikum berikut ini, baca dan lakukan praktikum, [Download File Praktikum 4](assets/reff/pjar/Praktikum_PJar_4.pdf){:target="_blank"}


### Arahan Untuk Praktikum 4 :

1. Lakukan Praktikum sesuai dengan arahan yang ada di file PDF praktikum yang telah anda download, kemuadian periksa hasilnya setelah dijalankan, jika tidak Error, silahkan kumpul atau upload ke folder  `PJaringan` pdada `Dropbox` nya masing2.
2. Lakukanlah praktikum bersama teman2 agar mudah memahami materi dan dapat berdiskusi ke teman2 jika ada masalah yang kurang dipahami...

### Waktu Kumpul

- Hasil praktikum Harap sudah dikumpul ke folder `PJaringan` di `dropbox` nya masing2, paling lambat hari `Jumat 20/11/2020`


***
***


-->

***
By : Ikhwan

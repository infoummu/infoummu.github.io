---
title: Kuliah Pemrograman Game P10
published: true
---

## PERTEMUAN SEPULUH 10 :

|Status  | : Online                       |
|Schedule| : Offline                      |
|Waktu   | : 29/12/2020                   |
|Tema    | : Praktikum 9 Pemrograman Game |

### Modul Praktikum 9

1. Diharapkan Mahasiswa mengikuti arahan yang ada di modul dalam mengerjakan praktikum setelah mendownload modulnya pada tautan dibawah ini
2. Doanload Modul berikut : [Modul Praktikum 9](assets/reff/pgame/Modul_Pgame_prak_9.pdf){:target="_blank"}


### Yang Perlu Disiapkan untuk Praktikum 9

Untuk Praktikum 9 ini, modul yang perlu dipersiapkan dan diInstall adalah pygame (jika pygame belum ter-Install, atau anda bisa memeriksa daftar modul yang terinstall dengan perintah : `pip list` atau `pip3 list` atau juga `python -m pip list`), perintah untuk meng-Install modul pygame ada dibawah ini, masuk/buka cmd dan ketikkan salah satu perintah dibawah: 
1. `peripip install pygame` atau  
2. `pip3 install pygame` atau
3. `python -m pip install pygame`

### HASIL Praktukum 9 Kumpul ke dropbox

1. Mahasiswa diharapkan membaca Modul dan melakukan praktikum sesuai dengan arahan yang ada di modul,

2. Kerjakan praktikum bersama teman2 lebih bagus sehingga bisa bertanya bagian materi yang tidak dipahami ke teman belajarnya, atau bisa juga bertanya langsung ke saya bisa lewat grup WA atau langsung WA personal...

3. Lakukan praktikum dan usahakan hasil praktikum tidak error, setelah itu upload/kirim ke folder `Pgame` pada akun `dropbox` anda masing-masing !.


### Waktu Kumpul ke Dropbox

Diharapkan agar sudah mengumpulkan hasil praktikum Pemrograman Game ke folder `PGame` di `dropbox` nya masing2 sebelum praktikum berikutnya.

### Latihan  9.1 - Script dalam Modul : 

1. Berikut merupakan script yang terdapat dalam modul, anda dapat copy-paste dan simpan dengan nama `praktikum9_1_pgame_npm.py` (jangan lupa ubah `npm` dengan lima (5) digit terakhir `NPM` anda !).

2. Buka CMD dan Jalankan script anda, jika tidak error silahkan ambil screenshot dari hasil script anda dan beri nama `praktikum9_1_pgame_hasil_npm.jpg`, kemudian sertakan saat dikirim ke dropbox.


```python

# Simpan dengan nama : praktikum9_1_pgame_npm.py
# Pemrograman Game Praktikum 9
# latihan code 9.1 : PyGame

import pygame, sys
from pygame.locals import *

pygame.init()

DISPLAYSURF = pygame.display.set_mode((400, 300))

pygame.display.set_caption('Hello InfoUMMU - NMP !')

while True: # main game loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()
	pygame.display.update()

```


### Latihan  9.2 PyGame – Mengubah ukuran Window dan Caption

Silahkan lanjutkan latihan dengan code yang sudah anda buat dengan mengubah pada beberapa bagian code:
1. Mengubah ukuran window (jendela), silahkan lihat keterangan di modul !,
2. Mengubah caption “Judul” window `“Hello InfoUMMU - NMP"`  menjadi `nama` dan `npm` anda !
3. Beri nama scriptnya dengan nama `praktikum9_2_pgame_npm.py`

untuk dapat mengubah code anda bisa membaca penjelasan tambahan yang ada di modul sebagai panduan.


***
By: ikhwan@fedora-linux
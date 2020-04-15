#While-for-break-continue
status = False
batas = 3
tabel_username =["admin", "sayaadmin", "sayajugaadmin"]
tabel_password =["ummu", "ternate", "akademik"]
while batas > 0:
	tanya_username = input("Masukan Username Anda:")
	tanya_password = input("Masukan Password Anda:")
	for password in tabel_password:
		for a_username in tabel_username:
			if tanya_password == password and tabel_username == a_username:
				print ("Selamat anda berhasil login")
				status = True
				break 
	if not status:
		print ("password & Username yang anda Masukan salah, silahkan login kembali")
		batas = batas-1
		continue
	else:
		break 
#whille-break
while True:
	a_username=input("Masukan Usename:")
	a_username=input("Masukan Password:")

	if a_username =="admin" and a_password =="ternate":
		print("Selamat anda berhasil login :)")
		break 
	else:
		print("username & password tidak sesuai, silahkan kembali login")
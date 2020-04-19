#while break
while true:
    a_username=input("masukan Username:")
    a_password=input("masukan password:")


    if a_username =="admin"  and a_password =="ternate":
        print("selamat anda berhasil login :)")
        break

    else:
        print("username & password tidak sesuai, silahkan kembali login")
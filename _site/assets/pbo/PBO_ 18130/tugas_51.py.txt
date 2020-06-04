#pengulangan for
a=["merah", "biru", "kuning"]
b=["hijau", "hitam", "putih"]
gabungan=[a,b]
for warna in gabungan:
	print(warna)
	for warna_detail in warna:
		print(warna_detail)

#pengulangan while
i = 1
while i <= 2:
	print('merah')
	i +=1

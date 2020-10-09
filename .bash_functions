#
# file .bash_functions : file tambahan untuk koleksi fungsi
# ---------------------------------------------------------
#	function tesf()
#	function gitlog()
#	function chkfile()
#	function rsite()
#	function b2b() 
#	function jeks()
#	function pycheck() 
#	function pgamepull() 
# ---------------------------------------------------------
function tesf(){
	echo "--------------------------------------"
	echo " --- TEST FUNGSI !!! ---"
	echo " --- From : $(pwd)/.bash_functions ---"		
	echo "--------------------------------------"
}
function icuckoo(){
	echo "--------------------------------------"
	echo " --- Install All Linux Host Cuckoo Requirements !!! ---"
	echo " --- From : .bash_functions ---"		
	echo "--------------------------------------"

#	sudo apt-get install python python-pip python-dev libffi-dev libssl-dev
#	sudo apt-get install python-virtualenv python-setuptools
#	sudo apt-get install libjpeg-dev zlib1g-dev swig

#	sudo apt-get install mongodb
#	sudo apt-get install postgresql libpq-dev

#	sudo groupadd pcap
#	sudo usermod -a -G pcap cuckoo
#	sudo usermod -a -G pcap cinmi
#	sudo chgrp pcap /usr/sbin/tcpdump
#	sudo setcap cap_net_raw,cap_net_admin=eip /usr/sbin/tcpdump
#	getcap /usr/sbin/tcpdump

}

function gitlog(){
	git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
	echo
}
#---------------------------------
# Fungsi Untuk check file 
#---------------------------------
function chkfile(){
	i=0;	
	flist="$1";
	IFS=$'\n';
	for py in $(cat $flist|cut -c 10-);
	do 
		#echo ":> $py";
		# python3 $py;
		#python3 $py 1>> $flist".ok" 2>> $flist".err" 
		if python3 $py &> /dev/null;
		then
			echo "OK :> $py"
		else
			echo "XX :> $py"
		fi 
		
	done
}

#---------------------------------
# Fungsi Untuk Replace string
# Fungsi Untuk Ubah String
#---------------------------------
function rsite(){
	opt=$1
	teks="$2"
	rteks="$3"
	if [ -z $opt ];
	then
		echo " rsite d/D teks :> cari dan remove teks "
		echo " rsite c/C teks :> cari teks"
		echo " rsite r/R teks Rteks :> Replace teks dengan Rteks"
	else
		if [ "$opt" = "d" ] || [ "$opt" = "D" ];
		then
			if [ -z $teks ];
			then
				echo "...:) ?";
			else
				#if [ -z $1 ];then teks="xyz";echo "...:) ?";  fi;
				i=0;	
				IFS=$'\n';
				for fl in $(find * -type f);
				do
					i=$(($i+1))
					cx=$(grep -ic $teks $fl)
					if grep -i $teks $fl &> /dev/null;
					then
						sed -i -e "s#$teks##g" $fl
						#sed -i 's#http://localhost:4000/##g' $fl
						#sed -i 's#https://localhost:4000/##g' $fl
						echo -e "$i : $cx :> $fl"
					else
						echo -e "$i : None :> $fl"
					fi	
				done
			fi;
		elif [ "$opt" = "c" ] || [ "$opt" = "C" ];
		then 
			if [ -z $teks ];
			then
				echo "...:) ?";
			else
				#if [ -z $1 ];then teks="xyz";echo "...:) ?";  fi;
				i=0;	
				IFS=$'\n';
				for fl in $(find * -type f);
				do
					i=$(($i+1))
					cx=$(grep -ic $teks $fl)
					if grep -i $teks $fl &> /dev/null;
					then
						#sed -i -e "s#$teks##g" $fl
						echo -e "$i : $cx :> $fl"
					else
						echo -e "$i : None :> $fl"
					fi	
				done
			fi;
		elif [ "$opt" = "r" ] || [ "$opt" = "R" ];
		then
			if [ -z $teks ] || [ -z "$rteks" ];
			then
				echo " Teks or Replace Teks ?...:)";
			else
				#if [ -z $1 ];then teks="xyz";echo "...:) ?";  fi;
				i=0;	
				IFS=$'\n';
				for fl in $(find * -type f);
				do
					i=$(($i+1))
					cx=$(grep -ic $teks $fl)
					if grep -i $teks $fl &> /dev/null;
					then
						#sed -i -e "s#$teks##g" $fl
						sed -i -e "s#$teks#$rteks#g" $fl
						echo -e "$i : $cx :> $fl"
					else
						echo -e "$i : None :> $fl"
					fi	
				done
			fi;
		fi
	fi;
}

#--------------------------
# Tambahan Funsi untuk Convert bit to KB, MB, GB
#--------------------------
function b2b() {
    local -i bytes=$1;
    if [[ $bytes -lt 1024 ]]; then
        echo "${bytes} B"
    elif [[ $bytes -lt 1048576 ]]; then
        echo "$(( (bytes + 1023)/1024 )) KB"
#    else
    elif [[ $bytes -lt 1073741823 ]]; then
    	echo "$(( (bytes + 1048575)/1048576 )) MB"
    else
        echo "$(( (bytes + 1073741823)/1073741824 )) GB"
    fi
}

#-----------------------------------------
# Tambahan Funsi untuk jalankan jekyll
# Untuk LXC pgame atau u1
#-----------------------------------------
function jeks(){
	#cd $1
	# echo ":: $1"
	lokasi="/media/myproject/infoummu.github.io"
#	if [ -z $1 ];then
#		echo "--------------------------------------"
#		echo ":: Maaf !, Ini Bukan git/jekyll Folder !!";
#		echo "--------------------------------------"	
#		#exit 0;	
#	else
	cd $lokasi;
	echo "Lokasi : $(pwd)"
	if cd $lokasi && [ -e .git ];then
		jekyll serve --incremental --host=0.0.0.0 > /dev/null 2>&1 &
		jekyll build --watch > /dev/null 2>&1 &
		echo "1. exec -> jekyll serve --incremental --host=0.0.0.0"
		echo "2. exec -> jekyll build --watch"
	else
		echo "--------------------------------------"
		echo "Maaf !, Ini Bukan git/jekyll Folder !!"
		echo "Jalankan di mesin lxc/pgame > u:ubuntu > jeks"		
		echo "--------------------------------------"
	fi
#	fi
}

#-----------------------------------------
# Tambahan Funsi untuk check python script
#-----------------------------------------
function pycheck() {
	function chek_kode() {
		filepy="$1"
		# python $filepy &> /dev/null
		err_name=$(basename $filepy)
		dir_name=$(dirname $filepy)
		python3 $filepy &> /dev/null # 2> /tmp/pgame_Error/$err_name.txt
		
		if [[ $? = 0 ]]; then
			echo -e " OK \t: $filepy "
			echo -e " OK \t: $filepy " >> ./err/listAll_OK.txt
		else
			echo -e " Error\t: $filepy "
			echo -e " Error\t: $filepy" >> ./err/listAll_Err.txt
			python3 $filepy 1> /dev/null 2> ./err/$dir_name"_"$err_name.txt
		fi
	}
	tanggal=$(date '+%d/%m/%Y-%H:%M:%S');
	echo -e "Tanggal : $tanggal" > ./err/listAll_OK.txt
	echo -e "=================================" >> ./err/listAll_OK.tx
	echo -e "Tanggal : $tanggal" > ./err/listAll_Err.txt
	echo -e "=================================" >> ./err/listAll_Err.txt
	IFS=$'\n';
	for l in $(find * -type f -name "*.py");
	do 
		chek_kode $l;
	done
}


#-----------------------------------------
# Tambahan Funsi untuk check python script
#-----------------------------------------
function pgamepull() {
	for br in $(git remote -v|awk '{print $1}'|sort|uniq);
	do 
		echo " ==================";
		git pull --no-edit $br master;
	done
}

tesf


.data

    pedirnumero1: .asciiz "ingresar el primer numero a asumar:\n"
    pedirnumero2: .asciiz "ingresar el Segundo numero a asumar:\n"
    totalsuma: .asciiz "El resultado de la suma es:\n"
  .text
    main:
      li $v0, 4
      la $a0, pedirnumero1
      syscall
      
      li $v0, 5
	syscall
	
	move $t0, $v0
	
     li $v0, 4
	la $a0, pedirnumero2
	syscall

  li $v0, 5
	syscall

	move $t1, $v0
	add $t2, $t0, $t1
	
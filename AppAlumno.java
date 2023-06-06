package primer;
import java.util.Scanner;

public class AppAlumno {

	public static void main(String[] args) {
		Scanner leer = new Scanner(System.in);
		System.out.print("Tamaño del grupo: ");
		int tam = leer.nextInt();
		Alumno grupo[] = new Alumno[tam];
		//Version cuando no se tienen los datos para crear el objeto
		for (int i = 0; i < grupo.length; i++) {
			Alumno altmp = new Alumno();
			System.out.print("Nombre del alumno "+ (i+1) + ": ");
			altmp.setNombre(leer.next());
			System.out.print("Calificacion 1: ");
			altmp.setC1(leer.nextInt());
			System.out.print("Caslificion 2: ");
			altmp.setC2(leer.nextInt());
			System.out.print("Calificacion 3: ");
			altmp.setC3(leer.nextInt());
			grupo[i] = altmp;
		}
		//Version cuando ya se tienen los datos para crear el objeto
		String nom;
		int c1,c2,c3;
		for (int i = 0; i < grupo.length; i++) {
			System.out.print("Nombre del alumno "+ (i+1) + ": ");
			nom=leer.next();
			System.out.print("Calificacion 1: ");
			c1=leer.nextInt();
			System.out.print("Caslificion 2: ");
			c2=leer.nextInt();
			System.out.print("Calificacion 3: ");
			c3=leer.nextInt();
			grupo[i] = new Alumno(nom,c1,c2,c3);
		
		}
		int promGral=0;
		for (int i = 0; i < grupo.length; i++) {
			System.out.println(grupo[i].getNombre() + ": "+grupo[i].Promedio());
			promGral+=grupo[i].Promedio();
		}
		System.out.println("Promedio del grupo: "+(promGral/tam));
		
		leer.close();

	}

}

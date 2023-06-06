package primer;

public class Alumno {
	private String nombre;
	private int c1,c2,c3;
	private float promedio;
	
	public Alumno(String nombre, int c1, int c2, int c3) {
		this.nombre = nombre;
		this.c1 = c1;
		this.c2 = c2;
		this.c3 = c3;
		promedio=(c1+c2+c3)/3;
	}
	public Alumno() {
		this("",0,0,0);
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getC1() {
		return c1;
	}

	public void setC1(int c1) {
		this.c1 = c1;
	}

	public int getC2() {
		return c2;
	}

	public void setC2(int c2) {
		this.c2 = c2;
	}

	public int getC3() {
		return c3;
	}

	public void setC3(int c3) {
		this.c3 = c3;
	}

	public int Promedio(){
		return ((c1+c2+c3)/3);
	}
}

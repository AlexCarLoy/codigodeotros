package com.generation;

import java.util.Scanner;

public class Codigo4 {

    public static void main(String[] args){
    	Scanner s = new Scanner(System.in); //Se agrega System.in para escribir en consola
        
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();
        
      //cambienjugador uno por el faltante jugador 2
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        Scanner s2 = new Scanner(System.in); //Se agrega System.in para escribir en consola
        String j2 = s.nextLine();
        
        if (j1 == j2) {
          System.out.println("Empate");
        } else {
          int g = 2;
          switch(j1) {
            case "piedra":
              if (j2 == "tijeras") {
                g = 1;
              }
            break; //faltaba este break	
            case "papel":
              if (j2 == "piedra") {
                g = 1;
              }
            break; //faltaba este break
            case "tijeras":
              if (j2.equals("papel")) {
                g = 1;
              }
              break;
          }
          System.out.println("Gana el jugador " + g);
        }
      }
    }
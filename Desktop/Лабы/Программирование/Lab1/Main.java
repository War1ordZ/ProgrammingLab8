import java.util.Random;
import java.lang.Math;
public class Main {
    public static void main(String[] args) {
        long[] a = {2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17};
        float[] x = new float[11];
        Random random = new Random();
        for(int i =0;i<x.length;i++){
            x[i]=random.nextInt(9);
            x[i]+=-7;
        }
        double[][] b = new double[16][11];
        for(int i = 0; i<16;i++)
        {
            for(int j = 0; j<11;j++)
            {
                if(a[i] == 5) b[i][j] = Math.sin(Math.pow(Math.E,Math.atan(((double)x[j]-2.5)/9)));
                else if (a[i] == 2 || a[i] == 3 || a[i] == 7 || a[i] == 9 || a[i] == 10
                        || a[i] == 13 || a[i] == 14 || a[i] == 17)
                {
                    b[i][j] = Math.pow(Math.pow(2/Math.pow((double)x[j],2*(double)x[j]),2),Math.PI*(Math.sin(Math.cos((double)x[j]))-0.5));
                }
                else b[i][j] = Math.asin(Math.cos(Math.pow(Math.log(Math.pow(Math.sin((double)x[j]),2)),1.0/3.0)));
            }
        }
        float h;
        for(double[] massive : b){
            System.out.println();
            for(double number : massive){
                h = (float) number;
                System.out.printf("%.3f", number);
                System.out.print(" ");
            }
            System.out.println(' ');
        }
    }
}
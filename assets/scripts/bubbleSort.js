function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"red");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "black");//Color update
                div_update(divs[j+1],div_sizes[j+1], "black");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "black");//Height update
                div_update(divs[j+1],div_sizes[j+1], "black");//Height update
            }
            div_update(divs[j],div_sizes[j], "red");//Color updat
        }
        div_update(divs[j],div_sizes[j], "black");//Color update
    }
    div_update(divs[0],div_sizes[0], "black");//Color update

    enable_buttons();
}

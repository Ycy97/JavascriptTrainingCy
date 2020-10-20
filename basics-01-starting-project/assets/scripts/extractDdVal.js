$(".dropDown").change(function(t)
{
    var currTarget = t.currentTarget;
    var val = currTarget.val();
    console.log("Value : " + val);
}); 
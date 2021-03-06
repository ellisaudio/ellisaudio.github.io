  //$(".dropbtn").hover($(this).show());

  function updatePage(page, category, sort)
  {
    $('#header-row').show();
    $('#page-header').empty().append(page);
    $('#items').hide();
    if(page == "Hire Packages")
    {
      $('#items').empty();
      $('#btn-row').hide();
      $('#filter-btn').hide();
      $('#sort-btn').hide();
      showPackages(page);
    }
    else if(page == "For Sale")
    {
      showSaleItems(page);
      $('#btn-row').hide();
      $('#filter-btn').hide();
      $('#sort-btn').hide();
    }
    else if(page == "Instructions")
    {
      $('#items').empty().html("<div class='row'><div class='col-12' style='background-color:white;margin:0.5%;padding:15px;opacity: 0.8;border-radius: 2px;border: 2px solid #8587fe;min-height:200px;text-align:center;width:99%'>");
        $('#items').append("<h2>On Pick up</h2>");
        $('#items').append("<p>Pick up the equipment at the arranged time from us in Yeronga.</p>");
        $('#items').append("<p>Please check your vehicle is large enough to fit all of your hire equipment. Ask us about how much space you need if you’re unsure. If you do not have a suitable vehicle to collect the equipment, ask us for delivery rates.</p>");
        $('#items').append("<p>Bring with you current photo ID with your current address. If your photo ID does not have your current address, please bring in 2 x forms/bills with your current address on it.</p>");
        $('#items').append("<p>Full payment is required before collection of your hire equipment be aware that if you choose to pay by direct deposit or cheque in advance, you must allow a minimum of 72 hours (or 3 x working days) for funds to clear in our account.</p>");
        $('#items').append("<p>The individual collecting the hire will be the individual signing for the hire.</p>");
        $('#items').append("<p>Please refer to our terms and conditions and ensure the person collecting the hire is responsible for the equipment.</p>");
        $('#items').append("<p>If you intend to use any of your own equipment with ours, please have all relevant details available for us such as additional cable requirements.</p>");
        $('#items').append("<p>We will ask you if you know how to use the equipment. Please ask us any questions you have, we are more than happy to answer them to help you get the most out of your event. Please ask us to avoid any damage or disappointment with your event.</p>");
        $('#items').append("<p>Common topics of query include:</p>");
        $('#items').append("<p><ul><li>How to connect the system together</li><li>Microphone technique and placement</li><li>Optimal operating level and signs that the system is being over-driven</li><li>Speaker placement to avoid feedback</li><li>Operating distance for wireless microphones</li><li>Connecting external devices such as laptops and iPods</li></ul></p>");
        $('#items').append("<h2>On Return:</h2>");
        $('#items').append("<p>At the end of your event, please check all equipment and cables off your equipment list before leaving your venue.  Any missing equipment (cables, power boards etc.) will be charged for replacement if they are missing on return. Roll cables to the best of your ability and ensure you have all road cases and covers that come with the equipment.  Pack into your vehicle safely and securely.</p>/div></div></div></div>");
      $('#btn-row').hide();
      $('#filter-btn').hide();
      $('#sort-btn').hide();
    }
    else if(page.indexOf("Hire") != -1)
    {
      if(category == "Show All")
      {
        $('#filter-btn').empty().append("Filter by Category");
      }
      else
      {
        $('#filter-btn').empty().append(category + ' <span style="color:red">&otimes;</span>');
      }
      if((sort == "Show All")||(sort == "All")||(sort == "Category"))
      {
        sort = "Category";
        $('#sort-btn').empty().append("Sorted by "+sort);
      }
      else
      {
        $('#sort-btn').empty().append("Sorted by "+sort + ' <span style="color:red">&otimes;</span>');
      }
      showHireItems(page, category, sort);
      showFilter(page, sort); 
      showSort(page, category);
      $('#btn-row').show();
    }
    else if(page == "About Us")
    {
      // showAboutUs();
      $('#items').show();
      $('#btn-row').hide();

      var html = "<div class='row'>";
        html += "<div class='col-12' style='background-color:white;margin:auto;padding:15px;border-radius: 2px;border: 2px solid #8587fe;min-height:200px;text-align:center;width:99%; opacity:08;'>";
          html += "<h1 style='font-size:x-Large;text-align:center;'>Who are we?</h1>";
          html += "<div class='row'>";
            html += "<div id='profile-pic' style=''>";
              html += "<br><img src='DB/images/Nick Profile.jpeg' alt='Image Not Available' style='width:100%;display:block;margin: 0 auto;max-width:100%;object-fit:contain;'>";
            html += "</div>";
            html += "<div id='profile-blurb' style=''>";
              html += "<h2 style='font-size:x-large'>Nick Ellis - Owner</h2>";
              html += "<p style='font-size:large;text-align:justify;'>Nick is the founder and owner of Ellis Audio, his desire is to provide high quality audio experiences for all of those using and listening to our systems. Nick has been operating Audio/Visual for over 10 years, including ten years of operating Audio/Visual through church (including two years overseeing the entire Audio/Visual ministry at two different churches) and operating Audio/Visual for six years for an international mission organisation.</p>";
            html += "</div>";
          html += "</div>";
        html += "</div>";
      html += "</div>";
      $('#items').empty().append(html);
    }
    else
    {
      $('#items').hide();
      $('#header-row').hide();
      $('#page-header').empty();
      $('#btn-row').hide();
      $('#filter-btn').hide();
      $('#sort-btn').hide();
      $('#items').empty();
      $.getJSON("index.json").done(function(items) 
      { 
        $('#items').prepend("<div class='row'><div class='col-12' style='background-color:white;margin:0.5%;padding:15px;opacity: 0.8;border-radius: 2px;border: 2px solid #8587fe;min-height:200px;text-align:center;width:99%'>"+items.content+"</div></div>");
      });
      $('#items').append('<div class="row" style="text-align:center; color:white;margin:auto;"><div class="col-12"><h1 style="margin:auto;text-align:center;margin-top:1%;font-size:xx-large;text-outline: 2px 2px #8587fe;">Our Packages for Hire</h1></div></div><div class="row">');

      showPackages("Hire Packages");
      $('#items').append('</div>');
    }
    $('#items').show();
  }

  function getQueryVariable(variable)
  {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) 
    {
      var pair = vars[i].split("=");
      if(pair[0] == variable)
        {
          var str = pair[1];
          str.replace(/%20/, " ");
          return decodeURI(str);
        }
    }
    return(false);
  }

  function showAboutUs()
  {
    $.getJSON("About Us.json").done(function(items) 
    {
      $('#items').append("<div class='col-12' style='background-color:white;margin:0.5%;padding:15px;border-radius: 2px;border: 2px solid #8587fe;min-height:200px;text-align:center;'>"+items.content+"</div>");
    });
  }

  function showInstructions(page)
  {

  }

  function showSaleItems(page)
  {
    $('#items').empty();
    $.getJSON("DB/Products/"+page+".json").done(function(items) 
    {
      for(var ii in items)
      {
        if(!items[ii].hide)
        {
        var html = "<div class='col-sale-item' style=''>";
        html += "<h1 class='item-title' style=''>"+items[ii].name+"</h1>";
        html += "<img src='DB/images/"+page+"/"+items[ii].catalog+".jpeg' alt='Image Not Available' style='min-height:170px;max-height:170px;display:block;margin: 0 auto;max-width:100%;object-fit:contain;'>";
        html += "<span>";
        html += "<h2>$"+items[ii].cost+"</h2>";
        if(items[ii].website != "")
        {
          html += "<a href='"+items[ii].website+"'>More Info</a>";
        }
        html += "</span></div>";
        $('#items').append(html);
        }
      }
    });
  }

  function showHireItems(page, category, sort)
  {
    $('#items').empty();
    $.getJSON("DB/Products/"+page+".json").done(function(items) 
    {
      if(sort == "Name")
      {
        items.sort( function(a, b) {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();

          return a < b ? -1 : a > b ? 1 : 0;
        });
      }
      else if(sort == "Price Low-High")
      {
        items.sort(function(a, b) {
          return parseFloat(a.perDay) - parseFloat(b.perDay);
        });
      }
      else if(sort == "Price High-Low")
      {
        items.sort(function(a, b) {
          return parseFloat(a.perDay) - parseFloat(b.perDay);
        });
        items.reverse();
      }
      else if(sort == "Category")
      {
        items.sort( function(a, b) {
          a = a.category.toLowerCase();
          b = b.category.toLowerCase();

          return a < b ? -1 : a > b ? 1 : 0;
        });
      }
      for(var ii in items)
      {
        if(!items[ii].hide)
        {
        if(category == "Show All")
        {
          var html = "<div class='col-hire-item' style=''>";
          html += "<h1 class='item-title' style=''>"+items[ii].name+"</h1>";
        html += "<img src='DB/images/"+page+"/"+items[ii].catalog+".jpeg' alt='Image Not Available' style='min-height:170px;max-height:170px;display:block;margin: 0 auto;max-width:100%;object-fit:contain;'>";
          html += "<span>";
          html += "<h2>$"+items[ii].perDay+"/Day       $"+items[ii].perWeek+"/Week</h2>";
          if(items[ii].website != "")
          {
            html += "<a href='"+items[ii].website+"'>More Info</a>";
          }
          html += "</span></div>";
          $('#items').append(html);
        }
        else
        {
          if(items[ii].category == category)
          {
            var html = "<div class='col-hire-item' style=''>";
            html += "<h1 class='item-title' style=''>"+items[ii].name+"</h1>";
        html += "<img src='DB/images/"+page+"/"+items[ii].catalog+".jpeg' alt='Image Not Available' style='min-height:170px;max-height:170px;display:block;margin: 0 auto;max-width:100%;object-fit:contain;'>";
            html += "<span>";
            html += "<h2>$"+items[ii].perDay+"/Day       $"+items[ii].perWeek+"/Week</h2>";
            if(items[ii].website != "")
            {
              html += "<a href='"+items[ii].website+"'>More Info</a>";
            }
            html += "</span></div>";
            $('#items').append(html);
          }
        }
        }
      }
    });
  }

    function showPackages(page)
  {
    $.getJSON("DB/Products/"+page+".json").done(function(items) 
    {
      for(var ii in items)
      {
        if(!items[ii].hide)
        {
          var html = "<div class='col-package-item' style=''>";
          html += "<h1 class='item-title' id='package-item-title' style=''>"+items[ii].name+"</h1>";
        html += "<img src='DB/images/"+page+"/"+items[ii].catalog+".jpeg' alt='Image Not Available' style='min-height:170px;max-height:170px;display:block;margin: 0 auto;max-width:100%;object-fit:contain;'>";
          html += "<span>";
          html += "<h2>$"+items[ii].perDay+"/Day       $"+items[ii].perWeek+"/Week</h2>";
          html += "<p>"+items[ii].shortDesc+"</p>";
          html += "</span></div>";
          $('#items').append(html);
        }
      }
    });
  }

  function showFilter(page, sort) 
  {
    $.getJSON("DB/Products/"+page+"-categories.json").done(function(categories) 
    {
      $('#filter-btn').show()
      $('#filter-options').empty();
      if(page == "Audio Hire"){var type = 0;}
      else if(page == "Visual Hire"){var type = 1;}
      else if(page == "Lighting Hire"){var type = 2;}
      else{$('#dropbtn').hide();return false;}
      for(var ii in categories)
      {
        if((categories[ii].category == "")||(categories[ii].category == null)||(categories[ii].category == undefined))
        {
          return;
        }
        else
        {
          $('#filter-options').append("<button onclick='$("+'"'+"#items"+'"'+").empty().append("+'"Loading..."'+");updatePage("+'"'+page+'"'+", "+'"'+categories[ii].category+'"'+", "+'"'+sort+'"'+");showSort("+'"'+page+'"'+", "+'"'+categories[ii].category+'"'+");'>"+categories[ii].category+"</button>");
        }
      }
    });
    return;
  }

  function showSort(page, category) 
  {
      $('#sort-btn').show()
      $('#sort-options').empty();
      var sortoptions = ["Category", "Name", "Price Low-High", "Price High-Low"];
      for(var ii in sortoptions)
      {
        $('#sort-options').append("<button onclick='$("+'"'+"#items"+'"'+").empty().append("+'"Loading..."'+");updatePage("+'"'+page+'", "'+category+'", "'+sortoptions[ii]+'"'+");showfilter("+'"'+page+'", "'+sortoptions[ii]+'"'+");'>Sort by "+sortoptions[ii]+"</button>");
      }
    return;
  }

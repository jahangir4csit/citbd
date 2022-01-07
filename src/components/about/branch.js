import React from "react";

const Branch = ()=>{
    return(
        <section id="branch">
            <div class="container">
                <h2>শাখা সমূহ</h2>
                <div class="row">
                    <div class="col-md-4 branch">
                        <div class="branch_item">
                            <h4>হেড অফিস</h4>
                            <p>মমতাজ প্লাজা (৫ম তালা) বাড়ী#৭, রোড#৪, ধানমন্ডি, ঢাকা-১২০৭ </p>
                        </div>
                    </div>
                    <div class="col-md-4 branch">
                        <div class="branch_item">
                            <h4>উত্তরা শাখা</h4>
                            <p>রাজউক রাজীব কসমো শপিং কমপ্লেক্স<br/>
৮ম তলা, বাড়ি#৭১, রোড#৫, সেক্টর#৭, আজমপুর, উত্তরা, ঢাকা-১২৩০  </p>
                        </div>
                    </div>
                    <div class="col-md-4 branch">
                        <div class="branch_item">
                            <h4>চট্রগ্রাম শাখা</h4>
                            <p>৯, কাপাসগোলা রোড (৪র্থ তলা) 
চক বাজার, তেলপট্টি মোড়, চট্টগ্রাম ৪২০৩</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Branch
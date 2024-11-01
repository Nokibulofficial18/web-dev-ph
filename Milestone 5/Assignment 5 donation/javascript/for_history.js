// personal counter to track history records and id of them by serial

class counter{
    static serial =0;
    static getCounter(){
        return ++this.serial;
    }
}

// to get the current date and time

function dateAndTime(){
    const curr = new Date();
    const currDayName = curr.toLocaleString('en-GB',{weekday: 'short'});
    const currDay = curr.getDate().toString().padStart(2,'0');
    const currMonthName = curr.toLocaleString('en-GB', {month: 'short'});
    const currYear = curr.getFullYear();
    const currTime = curr.toTimeString();

    return `Date: ${currDayName} ${currMonthName} ${currDay} ${currYear} ${currTime}`;
}

// function of history 
function makeDonationHistory(donation_type, amount) {
    document.getElementById('default-text').classList.add('hidden')
    const historyBook = document.getElementById('history-section');
    const newHistory = document.createElement('div');
    console.log(5)
    const content = `
        <div id="history" class="w-full mx-auto flex justify-between px-5 lg:px-10 xl:px-14 2xl:px-16 items-start border-2 border-gray-200 p-5 rounded-lg">
            <div id="donation-info" class="flex flex-col gap-2">
                <p id="donation-type" class="font-bold text-lg"></p>
                <p id="donation-time"></p>
            </div>
            <h2 id="donation-amount" class="font-bold text-xl tracking-wider">
            </h2>
        </div>
    `

    newHistory.innerHTML = content;
    
    const serial = counter.getCounter();

    historyMakeHelper(newHistory, 'history', serial, '');
    historyMakeHelper(newHistory, 'donation-info', serial, '');
    historyMakeHelper(newHistory, 'donation-time', serial, dateAndTime());
    historyMakeHelper(newHistory, 'donation-type', serial, donation_type);
    historyMakeHelper(newHistory, 'donation-amount', serial, `+${amount}`);
    newHistory.querySelector(`#donation-amount-${serial}`).classList.add('text-green-500');

    historyBook.appendChild(newHistory);
}

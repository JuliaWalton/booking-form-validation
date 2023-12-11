const serviceSelect = document.getElementById('service'); 
const serviceSpecifySelect = document.getElementById('service-specify');

// should we change event to a select event or a change event? 
serviceSelect.addEventListener('change', (e) => {
    console.log(e.target.value);
    let val = e.target.value;
    switch (val) {
        case "item1":
            serviceSpecifySelect.innerHTML = 
                `<option value="massage1">aromatherapy massage</option>
                <option value="massage2">fire and ice massage</option>
                <option value="massage3">prenatal massage</option>
                <option value="massage4">foot massage</option>
                <option value="massage5">couples massage</option>`
            break;
        case "item2":
            serviceSpecifySelect.innerHTML = 
                `<option value="skincare1">hydrating & brightening facial</option>
                <option value="skincare2">texture balance + oil control facial</option>
                <option value="skincare3">pore extraction and acne facial</option>
                <option value="skincare4">anti-aging red LED therapy</option>
                <option value="skincare5">wax treatments</option>`
            break;
        case "item3":
            serviceSpecifySelect.innerHTML = 
                `<option value="haircare1">deep conditioning treatment</option>
                <option value="haircare2">simple trim + styling</option>
                <option value="haircare3">cut and color</option>
                <option value="haircare4">blowout</option>`
            break;
        case "item4":
            serviceSpecifySelect.innerHTML = 
                `<option value="gentlemen1">haircut and clean shave</option>
                <option value="gentlemen2">hot wax brow and beard shaping</option>
                <option value="gentlemen3">anti-aging lymphatic massage + facial</option>
                <option value="gentlemen4">master sports massage</option>
                <option value="gentlemen5">couples massage</option>`
            break;
        case "item5":
            serviceSpecifySelect.innerHTML = 
                `<option value="package1">bridal pamper package</option>
                <option value="package2">best for mom package</option>
                <option value="package3">couples paradise package</option>
                <option value="package4">men's selfcare package</option>`
            break;
}
})


// $(document).ready(function () {
//     $("#type").change(function () {
//         var val = $(this).val();
//         if (val == "item1") {
//             $("#size").html("<option value='test'>item1: test 1</option><option value='test2'>item1: test 2</option>");
//         } else if (val == "item2") {
//             $("#size").html("<option value='test'>item2: test 1</option><option value='test2'>item2: test 2</option>");
//         } else if (val == "item3") {
//             $("#size").html("<option value='test'>item3: test 1</option><option value='test2'>item3: test 2</option>");
//         } else if (val == "item0") {
//             $("#size").html("<option value=''>--select one--</option>");
//         }
//     });
// });
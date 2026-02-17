let donors = [];

function addDonor() {
    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;

    if (name === "" || location === "" || mobile === "" || bloodGroup === "") {
        alert("Please fill all fields");
        return;
    }

    // 10-digit mobile validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter valid 10-digit mobile number");
        return;
    }

    donors.push({ name, location, mobile, bloodGroup });

    alert("Donor Registered Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("bloodGroup").value = "";
}

function searchDonor() {
    const group = document.getElementById("searchGroup").value;
    const donorList = document.getElementById("donorList");

    donorList.innerHTML = "";

    const filtered = donors.filter(donor => donor.bloodGroup === group);

    if (filtered.length === 0) {
        donorList.innerHTML = "<p>No donors found.</p>";
        return;
    }

    filtered.forEach(donor => {
        donorList.innerHTML += `
            <div class="donor-card">
                <p><strong>Name:</strong> ${donor.name}</p>
                <p><strong>Location:</strong> ${donor.location}</p>
                <p><strong>Mobile:</strong> ${donor.mobile}</p>
                <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
            </div>
        `;
    });
}

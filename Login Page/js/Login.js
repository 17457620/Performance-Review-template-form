function userAuth() {
    const userIDs = [];
    userIDs[0]= "DM001";
    userIDs[1]= "DM002";
    userIDs[2]= "DM003";
    userIDs[3]= "DM004";
    userIDs[4]= "DM005";
    userIDs[5]= "DM006";
    userIDs[6]= "DM007";
    userIDs[7]= "DM008";
    userIDs[8]= "DM009";
    userIDs[9]= "DM010";
    userIDs[10]= "DM011";
    userIDs[11]= "DM012";
    userIDs[12]= "DM013";
    userIDs[13]= "DM014";
    userIDs[14]= "DM015";
    userIDs[15]= "DM016";
    userIDs[16]= "DMCEO";

    const userPword = [];
    userPword[0]= "bestBoss";
    userPword[1]= "athlead";
    userPword[2]= "beets";
    userPword[3]= "beesly";
    userPword[4]= "NardDog";
    userPword[5]= "bobVance";
    userPword[6]= "Actually";
    userPword[7]= "genious";
    userPword[8]= "Sprinkles";
    userPword[9]= "CostaRica";
    userPword[10]= "Jim";
    userPword[11]= "Carrot";
    userPword[12]= "planking";
    userPword[13]= "darryl";
    userPword[14]= "hide";
    userPword[15]= "pam";
    userPword[16]= "Suck It";

    if(!userIDs.includes(document.getElementById("eID").value) || !userPword.includes(document.getElementById("pword").value)) {

        return false;
    }
    return true;
}
// ab9ad7689725097826c2f4d1796de28f38841d83 b4719e6c1cadf65c4c3c117fcfbaaf55c6de2499 f9a3f762dd054743573d46111ad01a02ec1e9388

function getOlderCommit(commitList) {
    const olderCommit = commitList[0];
    for (const commit of commitList) {
        if (commit.date.getTime() < olderCommit.date.getTime()) {
            olderCommit = commit;
        }
    }
    return olderCommit;
    
}

module.exports = getOlderCommit;